import { DashboardLayout } from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Download, ChevronLeft, ChevronRight } from "lucide-react";

const invoiceData = [
  {
    number: "QB78INFH25040946",
    date: "25 Apr 2023",
    time: "9:39 AM",
    product: "Enterprise",
    taxable: "1999.00",
    total: "2358.82"
  },
  {
    number: "QB69INAF24052333",
    date: "24 May 2023",
    time: "11:56 PM",
    product: "Enterprise",
    taxable: "1999.00",
    total: "2358.82"
  },
  {
    number: "QB42INGY22061117",
    date: "22 Jun 2023",
    time: "11:52 AM",
    product: "Enterprise",
    taxable: "1999.00",
    total: "2358.82"
  },
  {
    number: "QB65INEE07080831",
    date: "07 Aug 2023",
    time: "8:48 AM",
    product: "Professional",
    taxable: "1499.00",
    total: "1768.82"
  },
  {
    number: "QB46INVF04061236",
    date: "04 Jun 2025",
    time: "12:04 PM",
    product: "Professional",
    taxable: "1499.00",
    total: "1768.82"
  },
  {
    number: "QB13INAY06101408",
    date: "06 Oct 2025",
    time: "2:19 PM",
    product: "Custom",
    taxable: "845.00",
    total: "997.10"
  }
];

const Invoices = () => {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-background">
        <main className="ml-0 md:ml-64 mt-16 p-4 md:p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Invoice</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Management</span>
            <span>•</span>
            <span className="text-foreground">Invoice</span>
          </div>
        </div>

        {/* Mobile view - Cards */}
        <div className="block md:hidden space-y-4">
          {invoiceData.map((invoice) => (
            <Card key={invoice.number}>
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-sm font-medium">{invoice.number}</CardTitle>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{invoice.date}</span>
                      <span>•</span>
                      <span>{invoice.time}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Product</span>
                  <span className="font-medium">{invoice.product}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxable Amount</span>
                  <span className="font-medium">{invoice.taxable}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Amount</span>
                  <span className="font-semibold">{invoice.total}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desktop view - Table */}
        <Card className="hidden md:block">
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice Number</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Taxable Amount</TableHead>
                  <TableHead>Total Amount</TableHead>
                  <TableHead className="text-right">Download</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoiceData.map((invoice) => (
                  <TableRow key={invoice.number}>
                    <TableCell className="font-medium">{invoice.number}</TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <span>{invoice.date}</span>
                        <span className="text-sm text-muted-foreground">{invoice.time}</span>
                      </div>
                    </TableCell>
                    <TableCell>{invoice.product}</TableCell>
                    <TableCell>{invoice.taxable}</TableCell>
                    <TableCell>{invoice.total}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Controls - Responsive */}
        <Card className="mt-4">
          <CardContent className="py-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Switch id="dense" defaultChecked />
                <Label htmlFor="dense">Dense</Label>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Rows per page:</span>
                  <Select defaultValue="10">
                    <SelectTrigger className="w-16">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="20">20</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground">1-6 of 6</span>

                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" disabled>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" disabled>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      </div>
    </DashboardLayout>
  );
};

export default Invoices;
