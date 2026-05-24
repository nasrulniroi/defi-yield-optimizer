export interface ChartDataPoint {
  x: string | number;
  y: number;
  label?: string;
}

export interface TimeSeriesData {
  timestamp: string;
  value: number;
  label?: string;
}

export interface YieldChartData {
  protocol: string;
  color: string;
  data: TimeSeriesData[];
}

export interface PortfolioChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
    fill?: boolean;
  }[];
}

export interface PieChartData {
  labels: string[];
  data: number[];
  colors: string[];
}

export interface BarChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}
