interface Metrics {
  request: number;
  latency: number;
}

interface DataPoints {
  time: Date;
  value: number;
}

interface Historical {
  dataPoints: [DataPoints];
}

interface Service {
  name: string;
  category: string;
  status: string;
  metrics: Metrics;
  historical: Historical;
}

type Health = {
  status: string;
  version: number;
  memory: number[];
  connections: number;
  uptime: number;
  services: Service[];
  releaseId: number;
  serviceId: number;
  description: string;
};

export interface QueryHealth {
  apiHealth: Health;
}
