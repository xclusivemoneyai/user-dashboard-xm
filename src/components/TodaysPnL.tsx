import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";

interface DayEntry {
  day: number;
  amount: number; // in rupees, sign matters
}

const brokers = ["All brokers", "Zerodha", "Dhan", "Upstox"];
const pnlTypes = ["Combined", "Holdings", "Positions"];
const segments = ["All", "Equity", "F&O", "Commodity"];

// Sample July 2026 recorded days (Wed 8 red, Thu 9 & Fri 10 green)
const recorded: Record<number, number> = {
  8: -45400,
  9: 26400,
  10: 26400,
};

const fmtK = (n: number) => {
  const abs = Math.abs(n);
  const sign = n < 0 ? "−" : "";
  if (abs >= 1000) return `${sign}₹${(abs / 1000).toFixed(1)}k`;
  return `${sign}₹${abs}`;
};

// July 2026: Wed = July 1
// Grid starting Monday: first row has empty Mon/Tue, then 1 (Wed), 2 (Thu)...
const buildGrid = () => {
  // July 1 2026 is Wednesday -> index 2 in Mon-Sun
  const startOffset = 2;
  const daysInMonth = 31;
  const cells: (number | null)[] = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
};

export const TodaysPnL = () => {
  const [broker, setBroker] = useState("All brokers");
  const [pnl, setPnl] = useState("Combined");
  const [segment, setSegment] = useState("All");
  const initialRange: DateRange = { from: new Date(2026, 6, 9), to: new Date(2026, 6, 9) };
  const [range, setRange] = useState<DateRange | undefined>(initialRange);
  const [pendingRange, setPendingRange] = useState<DateRange | undefined>(initialRange);
  const [open, setOpen] = useState(false);

  const cells = buildGrid();
  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const periodTotal = 26372;
  const holdings = 16648;
  const positions = 9724;

  return (
    <Card className="p-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold">
          Today's P&L <span className="text-muted-foreground font-normal text-base">— holdings vs positions</span>
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Holdings use each broker's day-change; positions use the day's booked/MTM P&L. Dhan holdings expose no
          day-change, so they're excluded from today's number.
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Broker</label>
          <select
            value={broker}
            onChange={(e) => setBroker(e.target.value)}
            className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
          >
            {brokers.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">P&L</label>
          <select
            value={pnl}
            onChange={(e) => setPnl(e.target.value)}
            className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
          >
            {pnlTypes.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Segment</label>
          <select
            value={segment}
            onChange={(e) => setSegment(e.target.value)}
            className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm"
          >
            {segments.map((b) => <option key={b}>{b}</option>)}
          </select>
        </div>
        <div>
          <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Date Range</label>
          <Popover open={open} onOpenChange={(o) => { setOpen(o); if (o) setPendingRange(range); }}>
            <PopoverTrigger asChild>
              <button className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm flex items-center text-left hover:bg-accent/50">
                {range?.from ? format(range.from, "yyyy-MM-dd") : "—"}
                {" ~ "}
                {range?.to ? format(range.to, "yyyy-MM-dd") : (range?.from ? format(range.from, "yyyy-MM-dd") : "—")}
              </button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-auto p-0" sideOffset={8}>
              <div className="flex items-center gap-2 p-3 border-b">
                <div className="flex-1 h-9 rounded-md border border-input bg-background px-3 text-sm flex items-center">
                  {pendingRange?.from ? format(pendingRange.from, "MMMM d, yyyy") : "Start date"}
                </div>
                <span className="text-muted-foreground">→</span>
                <div className="flex-1 h-9 rounded-md border border-input bg-background px-3 text-sm flex items-center">
                  {pendingRange?.to ? format(pendingRange.to, "MMMM d, yyyy") : (pendingRange?.from ? format(pendingRange.from, "MMMM d, yyyy") : "End date")}
                </div>
                <Button variant="outline" size="icon" className="h-9 w-9 shrink-0">
                  <Clock className="h-4 w-4" />
                </Button>
              </div>
              <Calendar
                mode="range"
                numberOfMonths={2}
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="rounded-lg border border-border p-5 bg-muted/20">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Period Total</p>
          <p className="text-3xl font-bold text-green-500 mt-2">+₹{periodTotal.toLocaleString("en-IN")}</p>
          <p className="text-xs text-muted-foreground mt-1">1 day</p>
        </div>
        <div className="rounded-lg border border-border p-5 bg-muted/20">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Holdings</p>
          <p className="text-3xl font-bold text-green-500 mt-2">+₹{holdings.toLocaleString("en-IN")}</p>
          <p className="text-xs text-muted-foreground mt-1">day change</p>
        </div>
        <div className="rounded-lg border border-border p-5 bg-muted/20">
          <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Positions</p>
          <p className="text-3xl font-bold text-green-500 mt-2">+₹{positions.toLocaleString("en-IN")}</p>
          <p className="text-xs text-muted-foreground mt-1">booked / MTM</p>
        </div>
      </div>

      {/* Calendar */}
      <div className="flex items-center gap-3 mb-3">
        <Button variant="outline" size="icon" className="h-8 w-8">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <p className="font-semibold">July 2026</p>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <span className="text-sm text-muted-foreground ml-2">3 days recorded</span>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {weekdays.map((w) => (
          <div key={w} className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider px-2 py-1">
            {w}
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
                "relative h-20 rounded-md border p-2 text-sm",
                amt === undefined && "border-border bg-muted/10 text-muted-foreground",
                positive && "border-green-600/40 bg-green-600/20 text-green-400",
                negative && "border-red-600/40 bg-red-600/20 text-red-400"
              )}
            >
              <span className={cn(amt !== undefined ? "font-medium text-foreground" : "")}>{d}</span>
              {amt !== undefined && (
                <span className={cn("absolute bottom-2 right-2 text-xs font-semibold", positive ? "text-green-400" : "text-red-400")}>
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
