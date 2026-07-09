import { DashboardLayout } from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { RefreshCw, Check } from "lucide-react";

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

const PortfolioOptimiser = () => {
  const invested = 3192937;
  const currentValue = 3582871;
  const totalPnl = 390328;

  return (
    <DashboardLayout>
      <main className="md:ml-64 pt-16 min-h-screen bg-background">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold">
                Portfolio <span className="text-muted-foreground font-normal">— all accounts</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Open positions & delivery holdings across the source and every destination. Read-only.
              </p>
            </div>
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>

          {/* Summary cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="p-5">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Invested</p>
              <p className="text-2xl font-bold mt-2">{fmt(invested)}</p>
            </Card>
            <Card className="p-5">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Current Value</p>
              <p className="text-2xl font-bold mt-2">{fmt(currentValue)}</p>
            </Card>
            <Card className="p-5">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Total P&L</p>
              <p className="text-2xl font-bold mt-2 text-green-500">{signed(totalPnl)}</p>
              <p className="text-xs text-muted-foreground mt-1">13 symbols</p>
            </Card>
            <Card className="p-5">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Accounts</p>
              <p className="text-2xl font-bold mt-2">1 / 1</p>
              <p className="text-xs text-muted-foreground mt-1">connected</p>
            </Card>
          </div>

          {/* By account */}
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">By Account</p>
            <Card className="overflow-x-auto">
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
                    <TableCell className="text-right">{fmt(3192937)}</TableCell>
                    <TableCell className="text-right">{fmt(3582871)}</TableCell>
                    <TableCell className="text-right text-green-500">{signed(390328)}</TableCell>
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
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Combined By Symbol</p>
            <Card className="overflow-x-auto">
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
        </div>
      </main>
    </DashboardLayout>
  );
};

export default PortfolioOptimiser;
