export function generateRSA(params: {
  backerName: string;
  dealName: string;
  amount: number;
  revShare: string;
  cap: string;
  term: string;
  date: string;
}): string {
  return `REVENUE SHARE AGREEMENT

This Revenue Share Agreement ("Agreement") is entered into between Jaron Baston ("Operator") and ${params.backerName} ("Backer").

Project: ${params.dealName}
Investment Amount: $${params.amount.toLocaleString()}
Revenue Share: ${params.revShare} of net revenue
Cap: ${params.cap} of investment amount
Term: ${params.term} from first revenue event

The Operator agrees to pay the Backer their revenue share percentage monthly, until the cap is reached or the term expires, whichever comes first.

This agreement is binding upon electronic acceptance. Backer acknowledges that this is a high-risk early-stage investment and that revenue share is not guaranteed. Past performance of the Operator or related products does not guarantee future results.

Signed electronically on ${params.date}.`;
}
