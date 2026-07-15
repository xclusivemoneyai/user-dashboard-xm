import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Check } from "lucide-react";
import { TodaysPnL } from "@/components/TodaysPnL";

interface Holding {
  symbol: string;
  exch: string;
  qty: number;
  invested: number;
  value: number;
  pnl: number;
  profitPct: number;
  daysHeld: string;
  account: string;
}

const holdings: Holding[] = [
  { symbol: "MON100", exch: "NSE", qty: 3000, invested: 887216, value: 974550, pnl: 87334, profitPct: 9.8, daysHeld: "2d", account: "Amit Kumar Yadav · source" },
  { symbol: "NH", exch: "NSE", qty: 200, invested: 361338, value: 398640, pnl: 37302, profitPct: 10.3, daysHeld: "2d", account: "Amit Kumar Yadav · source" },
  { symbol: "SGBJUL28IV", exch: "BSE", qty: 25, invested: 120050, value: 358125, pnl: 238075, profitPct: 198.3, daysHeld: "2d", account: "Amit Kumar Yadav · source" },
  { symbol: "3MINDIA", exch: "NSE", qty: 10, invested: 340500, value: 347450, pnl: 6950, profitPct: 2.0, daysHeld: "2d", account: "Amit Kumar Yadav · source" },
  { symbol: "YATHARTH", exch: "NSE", qty: 400, invested: 302000, value: 328360, pnl: 26360, profitPct: 8.7, daysHeld: "2d", account: "Amit Kumar Yadav · source" },
  { symbol: "BALRAMCHIN", exch: "NSE", qty: 500, invested: 273447, value: 283725, pnl: 10278, profitPct: 3.8, daysHeld: "2d", account: "Amit Kumar Yadav · source" },
  { symbol: "AVANTEL", exch: "NSE", qty: 1500, invested: 236475, value: 269715, pnl: 33240, profitPct: 14.1, daysHeld: "2d", account: "Amit Kumar Yadav · source" },
  { symbol: "TEMBO", exch: "NSE", qty: 300, invested: 186177, value: 169515, pnl: -16662, profitPct: -8.9, daysHeld: "2d", account: "Amit Kumar Yadav · source" },
  { symbol: "ARHAM-SM", exch: "NSE", qty: 1000, invested: 146000, value: 138950, pnl: -7050, profitPct: -4.8, daysHeld: "2d", account: "Amit Kumar Yadav · source" },
];

const fmt = (n: number) => `₹${Math.abs(n).toLocaleString("en-IN")}`;
const signed = (n: number) => `${n >= 0 ? "+" : "−"}₹${Math.abs(n).toLocaleString("en-IN")}`;
const fmtCompact = (n: number) => {
  const abs = Math.abs(n);
  if (abs >= 10000000) return `₹${(abs / 10000000).toFixed(2)}Cr`;
  if (abs >= 100000) return `₹${(abs / 100000).toFixed(2)}L`;
  if (abs >= 1000) return `₹${(abs / 1000).toFixed(1)}k`;
  return `₹${abs}`;
};
const signedCompact = (n: number) => `${n >= 0 ? "+" : "−"}${fmtCompact(n)}`;

const PortfolioOptimiser = () => {
  const invested = 3192937;
  const currentValue = 3582871;
  const totalPnl = 390328;

  return (
    <DashboardLayout>
      <main className="md:ml-64 pt-16 min-h-screen bg-background">
        <div className="p-4 md:p-6 space-y-4 md:space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h1 className="text-xl md:text-2xl font-bold">
                Portfolio <span className="text-muted-foreground font-normal">— all accounts</span>
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">
                Open positions & delivery holdings across the source and every destination. Read-only.
              </p>
            </div>
            <Button variant="outline" size="sm" className="shrink-0">
              <RefreshCw className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Refresh</span>
            </Button>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <Card className="p-4 md:p-5">
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Invested</p>
              <p className="text-lg md:text-2xl font-bold mt-1 md:mt-2 truncate">{fmtCompact(invested)}</p>
            </Card>
            <Card className="p-4 md:p-5">
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Current Value</p>
              <p className="text-lg md:text-2xl font-bold mt-1 md:mt-2 truncate">{fmtCompact(currentValue)}</p>
            </Card>
            <Card className="p-4 md:p-5">
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Total P&L</p>
              <p className="text-lg md:text-2xl font-bold mt-1 md:mt-2 text-green-500 truncate">{signedCompact(totalPnl)}</p>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-1">13 symbols</p>
            </Card>
            <Card className="p-4 md:p-5">
              <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">Accounts</p>
              <p className="text-lg md:text-2xl font-bold mt-1 md:mt-2">1 / 1</p>
              <p className="text-[10px] md:text-xs text-muted-foreground mt-1">connected</p>
            </Card>
          </div>

          {/* By account */}
          <div>
            <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mb-2 md:mb-3">By Account</p>

            {/* Mobile card */}
            <Card className="p-4 md:hidden">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="font-medium truncate text-sm">Amit Kumar Yadav</p>
                  <p className="text-xs text-muted-foreground">source</p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge variant="outline" className="border-amber-500/50 text-amber-500 text-[10px]">ZERODHA</Badge>
                  <Check className="h-4 w-4 text-green-500" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-border">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Balance</p>
                  <p className="text-sm font-medium">{fmtCompact(4741945)}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Invested</p>
                  <p className="text-sm font-medium">{fmtCompact(invested)}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Value</p>
                  <p className="text-sm font-medium">{fmtCompact(currentValue)}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">P&L</p>
                  <p className="text-sm font-medium text-green-500">{signedCompact(totalPnl)}</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Positions</p>
                  <p className="text-sm font-medium">1</p>
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Holdings</p>
                  <p className="text-sm font-medium">12</p>
                </div>
              </div>
            </Card>

            {/* Desktop table */}
            <Card className="overflow-x-auto hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Account</TableHead>
                    <TableHead>Broker</TableHead>
                    <TableHead className="text-right">Balance</TableHead>
                    <TableHead className="text-right">Invested</TableHead>
                    <TableHead className="text-right">Value</TableHead>
                    <TableHead className="text-right">P&L</TableHead>
                    <TableHead className="text-right">Pos</TableHead>
                    <TableHead className="text-right">Hold</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Amit Kumar Yadav · source</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="border-amber-500/50 text-amber-500">ZERODHA</Badge>
                    </TableCell>
                    <TableCell className="text-right">{fmt(4741945)}</TableCell>
                    <TableCell className="text-right">{fmt(invested)}</TableCell>
                    <TableCell className="text-right">{fmt(currentValue)}</TableCell>
                    <TableCell className="text-right text-green-500">{signed(totalPnl)}</TableCell>
                    <TableCell className="text-right">1</TableCell>
                    <TableCell className="text-right">12</TableCell>
                    <TableCell className="text-center">
                      <Check className="h-4 w-4 text-green-500 inline" />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>

          {/* Combined by symbol */}
          <div>
            <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mb-2 md:mb-3">Combined By Symbol</p>

            {/* Mobile cards — white theme */}
            <div className="space-y-3 md:hidden">
              {holdings.map((h) => {
                const positive = h.pnl >= 0;
                return (
                  <div
                    key={h.symbol}
                    className="rounded-xl bg-white border border-slate-200 shadow-sm p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-bold text-base text-slate-900 truncate tracking-tight">{h.symbol}</p>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {h.exch} · {h.qty.toLocaleString("en-IN")} qty · {h.daysHeld}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className={`text-base font-bold ${positive ? "text-emerald-600" : "text-rose-600"}`}>
                          {signedCompact(h.pnl)}
                        </p>
                        <span
                          className={`inline-block mt-1 text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                            positive ? "text-emerald-700 bg-emerald-50" : "text-rose-700 bg-rose-50"
                          }`}
                        >
                          {positive ? "+" : ""}{h.profitPct}%
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100">
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Invested</p>
                        <p className="text-sm font-semibold text-slate-900 mt-0.5">{fmtCompact(h.invested)}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Value</p>
                        <p className="text-sm font-semibold text-slate-900 mt-0.5">{fmtCompact(h.value)}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop table */}
            <Card className="overflow-x-auto hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Symbol</TableHead>
                    <TableHead>Exch</TableHead>
                    <TableHead className="text-right">Net Qty</TableHead>
                    <TableHead className="text-right">Invested</TableHead>
                    <TableHead className="text-right">Value ▼</TableHead>
                    <TableHead className="text-right">P&L</TableHead>
                    <TableHead className="text-right">Profit %</TableHead>
                    <TableHead className="text-right">Days Held</TableHead>
                    <TableHead className="text-right">7D %</TableHead>
                    <TableHead className="text-right">30D %</TableHead>
                    <TableHead className="text-right">90D %</TableHead>
                    <TableHead>Accounts</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {holdings.map((h) => {
                    const positive = h.pnl >= 0;
                    return (
                      <TableRow key={h.symbol}>
                        <TableCell className="font-medium">{h.symbol}</TableCell>
                        <TableCell className="text-muted-foreground">{h.exch}</TableCell>
                        <TableCell className="text-right">{h.qty.toLocaleString("en-IN")}</TableCell>
                        <TableCell className="text-right">{fmt(h.invested)}</TableCell>
                        <TableCell className="text-right">{fmt(h.value)}</TableCell>
                        <TableCell className={`text-right ${positive ? "text-green-500" : "text-red-500"}`}>
                          {signed(h.pnl)}
                        </TableCell>
                        <TableCell className={`text-right ${positive ? "text-green-500 bg-green-500/10" : "text-red-500 bg-red-500/10"}`}>
                          {positive ? "+" : ""}{h.profitPct}%
                        </TableCell>
                        <TableCell className="text-right text-muted-foreground">{h.daysHeld}</TableCell>
                        <TableCell className="text-right text-muted-foreground">—</TableCell>
                        <TableCell className="text-right text-muted-foreground">—</TableCell>
                        <TableCell className="text-right text-muted-foreground">—</TableCell>
                        <TableCell className="text-muted-foreground text-xs">{h.account}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </Card>
          </div>

          {/* Today's P&L */}
          <TodaysPnL />
        </div>
      </main>
    </DashboardLayout>
  );
};

export default PortfolioOptimiser;
