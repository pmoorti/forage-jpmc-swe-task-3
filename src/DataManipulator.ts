import { ServerRespond } from './DataStreamer';

export interface Row {
  price_abc: number,
  price_def: number,
  ratio: number,
  timestamp: Date,
  upper_bound: number,
  lower_bound: number,
  tigger_alert: number | undefined,
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]): Row {
    const priceABC = (serverRespond[0].top_ask.price + serverRespond[0].top_bid.price) / 2;
    const priceDEF = (serverRespond[1].top_ask.price + serverRespond[1].top_bid.price) / 2;
    const ratio = priceABC/priceDEF;
    const upperBound = 1 + 0.05;
    const lowerBound = 1 - 0.05;
      return {
        priceABC = price_abc,
        priceDEF = price_def,
        ratio,
        timestamp: serverRespond[0].timestamp > serverRespond[1].timestamp ? serverRespond[0].timestamp : serverRespond[1].timestamp,
        upperBound: upper_bound,
        lowerBound: lower_bound,
        trigger_alert: (ratio > upperBound || ratio < lowerBound) ? ratio : undefined,


      };
    }
  }

