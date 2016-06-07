export interface StockItem {
	Change: number;
	ChangePercent: number;
	ChangePercentYTD: number;
	ChangeYTD: number;
	High: number;
	LastPrice: number;
	Low: number;
	MSDate: number;
	MarketCap: number;
	Name: string;
	Open: number;
	Status: string; // should be enum of "SUCCESS" and whatever else they return
	Symbol: string;
	Timestamp: string;
	Volume: number;
}
