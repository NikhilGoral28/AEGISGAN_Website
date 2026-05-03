// src/data/dummyTemplate.js
// DUMMY TEMPLATE MODULE
// This defines the EXACT JSON struture your python CNN-LSTM backend should return.
// Once your backend is ready, just have it return this JSON structure and the React app will perfectly render it without any changes needed!

export const BACKEND_PREDICTION_TEMPLATE = {
  meta: {
    fileName: "Sample_Network_Dump.csv",
    analyzedAt: "2026-04-14T10:00:00.000Z",
    modelUsed: "AegisGAN Hybrid (CNN+LSTM)"
  },
  summary: {
    totalRows: 25000,
    normalCount: 22100,
    attackCount: 2900,
    threatRatio: 11.6, // percentage
    accuracyEst: 98.42 // model metric
  },
  threatDistribution: [
    { name: "DoS", value: 1250 },
    { name: "Exploits", value: 850 },
    { name: "Backdoor", value: 500 },
    { name: "Shellcode", value: 300 }
  ],
  timelineData: [
    // Describes volume of Normal vs Attacks in chronolocial segments of the file
    { time: "00:00", normal: 2000, attacks: 20 },
    { time: "01:00", normal: 2100, attacks: 450 },
    { time: "02:00", normal: 1900, attacks: 15 },
    { time: "03:00", normal: 2400, attacks: 900 },
    { time: "04:00", normal: 2200, attacks: 1200 },
    { time: "05:00", normal: 2300, attacks: 315 }
  ],
  criticalLogs: [
    {
      id: "LOG-001",
      timestamp: "2026-04-14 10:01:15",
      type: "Exploits",
      proto: "tcp",
      state: "FIN",
      duration: "0.465697",
      spkts: 10,
      dpkts: 10,
      score: 0.96 // CNN-LSTM Anomaly Confidence
    },
    {
      id: "LOG-002",
      timestamp: "2026-04-14 10:02:10",
      type: "DoS",
      proto: "unas",
      state: "INT",
      duration: "0.000006",
      spkts: 2,
      dpkts: 0,
      score: 0.99
    },
    {
      id: "LOG-003",
      timestamp: "2026-04-14 10:05:44",
      type: "Backdoor",
      proto: "unas",
      state: "INT",
      duration: "0.000006",
      spkts: 2,
      dpkts: 0,
      score: 0.88
    },
    {
      id: "LOG-004",
      timestamp: "2026-04-14 10:11:02",
      type: "Shellcode",
      proto: "tcp",
      state: "FIN",
      duration: "0.575059",
      spkts: 10,
      dpkts: 8,
      score: 0.94
    },
    {
      id: "LOG-005",
      timestamp: "2026-04-14 10:15:33",
      type: "DoS",
      proto: "crtp",
      state: "INT",
      duration: "0.000009",
      spkts: 2,
      dpkts: 0,
      score: 0.91
    },
    {
      id: "LOG-006",
      timestamp: "2026-04-14 10:16:11",
      type: "DoS",
      proto: "ifmp",
      state: "INT",
      duration: "0.000003",
      spkts: 2,
      dpkts: 0,
      score: 0.98
    }
  ]
};
