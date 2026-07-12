import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { useIsMobile } from "@/hooks/use-mobile";

const brokers = ["All brokers", "Zerodha", "Dhan", "Upstox"];
const pnlTypes = ["Combined", "Holdings", "Positions"];
const segments = ["All", "Equity", "F&O", "Commodity"];

const recorded: Record<number, number> = {
  8: -45400,
  9: 26400,
  10: 26400,
};

const fmtK = (n: number) => {
  const abs = Math.abs(n);
  const sign = n < 0 ? "−" : "+";
  if (abs >= 1000) return `${sign}${(abs / 1000).toFixed(1)}k`;
  return `${sign}${abs}`;
};

const buildGrid = () => {
  const startOffset = 2; // July 1 2026 = Wed
  const daysInMonth = 31;
  const cells: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
};

export const TodaysPnL = () => {
  const isMobile = useIsMobile();
  const [broker, setBroker] = useState("All brokers");
  const [pnl, setPnl] = useState("Combined");
  const [segment, setSegment] = useState("All");
  const initialRange: DateRange = { from: new Date(2026, 6, 9), to: new Date(2026, 6, 9) };
  const [range, setRange] = useState<DateRange | undefined>(initialRange);
  const [pendingRange, setPendingRange] = useState<DateRange | undefined>(initialRange);
  const [open, setOpen] = useState(false);

  const cells = buildGrid();
  const weekdays = ["M", "T", "W", "T", "F", "S", "S"];
  const weekdaysFull = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const periodTotal = 26372;
  const holdings = 16648;
  const positions = 9724;

  return (
    <Card className="p-4 md:p-6">
      <div className="mb-4">
        <h2 className="text-lg md:text-xl font-bold">
          Today's P&L <span className="text-muted-foreground font-normal text-sm md:text-base block md:inline">— holdings vs positions</span>
        </h2>
        <p className="text-xs md:text-sm text-muted-foreground mt-1">
          Holdings use each broker's day-change; positions use the day's booked/MTM P&L.
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
        <div>
          <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Broker</label>
          <select
            value={broker}
            onChange={(e) => setBroker(e.target.value)}
            className="mt-1 w-full h-9 md:h-10 rounded-md border border-input bg-background px-2 md:px-3 text-xs md:text-sm"
          >
            {brokers.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">P&L</label>
          <select
            value={pnl}
            onChange={(e) => setPnl(e.target.value)}
            className="mt-1 w-full h-9 md:h-10 rounded-md border border-input bg-background px-2 md:px-3 text-xs md:text-sm"
          >
            {pnlTypes.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Segment</label>
          <select
            value={segment}
            onChange={(e) => setSegment(e.target.value)}
            className="mt-1 w-full h-9 md:h-10 rounded-md border border-input bg-background px-2 md:px-3 text-xs md:text-sm"
          >
            {segments.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Date Range</label>
          <Popover open={open} onOpenChange={(o) => { setOpen(o); if (o) setPendingRange(range); }}>
            <PopoverTrigger asChild>
              <button className="mt-1 w-full h-9 md:h-10 rounded-md border border-input bg-background px-2 md:px-3 text-xs md:text-sm flex items-center text-left hover:bg-accent/50 truncate">
                <span className="truncate">
                  {range?.from ? format(range.from, "MMM d") : "—"}
                  {" ~ "}
                  {range?.to ? format(range.to, "MMM d") : (range?.from ? format(range.from, "MMM d") : "—")}
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-auto p-0 max-w-[calc(100vw-2rem)]" sideOffset={8}>
              <div className="flex items-center gap-2 p-3 border-b">
                <div className="flex-1 h-9 rounded-md border border-input bg-background px-2 md:px-3 text-xs md:text-sm flex items-center min-w-0 truncate">
                  {pendingRange?.from ? format(pendingRange.from, "MMM d, yyyy") : "Start"}
                </div>
                <span className="text-muted-foreground shrink-0">→</span>
                <div className="flex-1 h-9 rounded-md border border-input bg-background px-2 md:px-3 text-xs md:text-sm flex items-center min-w-0 truncate">
                  {pendingRange?.to ? format(pendingRange.to, "MMM d, yyyy") : (pendingRange?.from ? format(pendingRange.from, "MMM d, yyyy") : "End")}
                </div>
                <Button variant="outline" size="icon" className="h-9 w-9 shrink-0">
                  <Clock className="h-4 w-4" />
                </Button>
              </div>
              <Calendar
                mode="range"
                numberOfMonths={isMobile ? 1 : 2}
                selected={pendingRange}
                onSelect={setPendingRange}
                defaultMonth={pendingRange?.from ?? new Date(2026, 6, 1)}
                className="p-3 pointer-events-auto"
              />
              <div className="flex items-center justify-end gap-2 p-3 border-t">
                <Button variant="outline" size="sm" onClick={() => setOpen(false)}>Cancel</Button>
                <Button
                  size="sm"
                  disabled={!pendingRange?.from}
                  onClick={() => {
                    const applied = pendingRange?.from && !pendingRange.to
                      ? { from: pendingRange.from, to: pendingRange.from }
                      : pendingRange;
                    setRange(applied);
                    setOpen(false);
                  }}
                >
                  Apply
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Summary tiles */}
      <div className="grid grid-cols-3 gap-2 md:gap-4 mb-4 md:mb-6">
        <div className="rounded-lg border border-border p-3 md:p-5 bg-muted/20">
          <p className="text-[9px] md:text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Period</p>
          <p className="text-base md:text-3xl font-bold text-green-500 mt-1 md:mt-2 truncate">+₹{(periodTotal / 1000).toFixed(1)}k</p>
          <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">1 day</p>
        </div>
        <div className="rounded-lg border border-border p-3 md:p-5 bg-muted/20">
          <p className="text-[9px] md:text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Holdings</p>
          <p className="text-base md:text-3xl font-bold text-green-500 mt-1 md:mt-2 truncate">+₹{(holdings / 1000).toFixed(1)}k</p>
          <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">day chg</p>
        </div>
        <div className="rounded-lg border border-border p-3 md:p-5 bg-muted/20">
          <p className="text-[9px] md:text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Positions</p>
          <p className="text-base md:text-3xl font-bold text-green-500 mt-1 md:mt-2 truncate">+₹{(positions / 1000).toFixed(1)}k</p>
          <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5 md:mt-1">MTM</p>
        </div>
      </div>

      {/* Calendar */}
      <div className="flex items-center gap-2 md:gap-3 mb-3">
        <Button variant="outline" size="icon" className="h-7 w-7 md:h-8 md:w-8">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <p className="font-semibold text-sm md:text-base">July 2026</p>
        <Button variant="outline" size="icon" className="h-7 w-7 md:h-8 md:w-8">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <span className="text-xs md:text-sm text-muted-foreground ml-auto md:ml-2">3 days</span>
      </div>

      <div className="grid grid-cols-7 gap-1 md:gap-2">
        {weekdaysFull.map((w, i) => (
          <div key={w} className="text-[9px] md:text-[10px] font-semibold text-muted-foreground uppercase tracking-wider text-center md:text-left px-1 md:px-2 py-1">
            <span className="md:hidden">{weekdays[i]}</span>
            <span className="hidden md:inline">{w}</span>
          </div>
        ))}
        {cells.map((d, i) => {
          if (d === null) return <div key={i} />;
          const amt = recorded[d];
          const positive = amt !== undefined && amt >= 0;
          const negative = amt !== undefined && amt < 0;
          return (
            <div
              key={i}
              className={cn(
                "relative aspect-square md:aspect-auto md:h-20 rounded-md border p-1 md:p-2 text-xs md:text-sm flex flex-col",
                amt === undefined && "border-border bg-muted/10 text-muted-foreground",
                positive && "border-green-600/40 bg-green-600/20 text-green-400",
                negative && "border-red-600/40 bg-red-600/20 text-red-400"
              )}
            >
              <span className={cn("text-xs md:text-sm", amt !== undefined ? "font-medium text-foreground" : "")}>{d}</span>
              {amt !== undefined && (
                <span className={cn("mt-auto text-[9px] md:text-xs font-semibold leading-tight", positive ? "text-green-400" : "text-red-400")}>
                  {fmtK(amt)}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
};
