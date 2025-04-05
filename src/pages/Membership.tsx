
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Button from '@/components/Button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Membership: React.FC = () => {
  // Mock data - replace with actual data fetching logic
  const activeMembership = {
    gymName: "FitZone Yoga",
    membershipType: "Monthly Pass",
    startDate: "Mar 1, 2025",
    endDate: "Mar 31, 2025", 
    status: "✅ Active",
    nextPaymentDue: "Mar 31, 2025",
    lightningInvoice: "ln1234567890"
  };

  const membershipHistory = [
    {
      gym: "FitZone Yoga",
      type: "Weekly Pass",
      period: "Jan 10–17, 2025",
      amountPaid: "25,000 sats",
      status: "Completed",
      paymentMethod: "⚡ Lightning"
    },
    {
      gym: "StrengthLab SP", 
      type: "Monthly Pass",
      period: "Feb 1–Mar 1, 2025",
      amountPaid: "90,000 sats",
      status: "Completed", 
      paymentMethod: "⚡ Lightning"
    }
  ];

  return (
    <div className="container mx-auto p-6 space-y-6 bg-gymstr-navy min-h-screen text-gymstr-beige">
      <h1 className="text-3xl font-bold mb-6">Membership Details</h1>

      {/* Active Membership Section */}
      <Card className="bg-[#1E293B] border-none">
        <CardHeader>
          <CardTitle className="text-gymstr-beige">Your Active Membership</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-gymstr-beige">
            <p><strong>Gym:</strong> {activeMembership.gymName}</p>
            <p><strong>Type:</strong> {activeMembership.membershipType}</p>
            <p><strong>Start Date:</strong> {activeMembership.startDate}</p>
            <p><strong>End Date:</strong> {activeMembership.endDate}</p>
            <p><strong>Status:</strong> {activeMembership.status}</p>
            <p><strong>Next Payment:</strong> {activeMembership.nextPaymentDue}</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <Button variant="primary">Renew Membership</Button>
            <Button variant="outline">Cancel Membership</Button>
          </div>
        </CardContent>
      </Card>

      {/* Membership History Section */}
      <Card className="bg-[#1E293B] border-none">
        <CardHeader>
          <CardTitle className="text-gymstr-beige">Membership History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Gym</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Amount Paid</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment Method</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {membershipHistory.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.gym}</TableCell>
                  <TableCell>{entry.type}</TableCell>
                  <TableCell>{entry.period}</TableCell>
                  <TableCell>{entry.amountPaid}</TableCell>
                  <TableCell>{entry.status}</TableCell>
                  <TableCell>{entry.paymentMethod}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="bg-[#1E293B] border-none">
        <CardHeader>
          <CardTitle className="text-gymstr-beige">Need Help with Your Membership?</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="nostr-proof">
              <AccordionTrigger>🔐 How does Nostr prove my membership?</AccordionTrigger>
              <AccordionContent>
                Nostr provides a decentralized way to verify and manage your gym membership through cryptographically signed events.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="payment-methods">
              <AccordionTrigger>⚡ Can I pay with fiat?</AccordionTrigger>
              <AccordionContent>
                Currently, payments are processed via Lightning Network. Fiat support is coming soon.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="membership-renewal">
              <AccordionTrigger>🔄 How do I renew or switch gyms?</AccordionTrigger>
              <AccordionContent>
                You can renew or switch gyms directly from this page using the buttons above.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default Membership;
