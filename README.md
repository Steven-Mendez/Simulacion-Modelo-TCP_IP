# Simulación Modelo TCP/IP

```json
{
  "header": {
    "frameStart": 170,
    "Addressing": {
      "destinationMAC": "00:11:22:33:44:55",
      "sourceMAC": "aa:bb:cc:dd:ee:ff"
    },
    "type": 2048,
    "control": 0
  },
  "packet": {
    "version": 4,
    "transportLayerData": {
      "applicationLayerData": {
        "data": "Hello World"
      },
      "sourcePort": 8080,
      "destinationPort": 80,
      "sequenceNumber": 12345,
      "acknowledgementNumber": 54321,
      "headerLength": 5,
      "reserved": 0,
      "controlBits": 2,
      "windowSize": 1024,
      "checksum": 1234,
      "urgent": 0,
      "options": [
        1,
        2,
        3
      ]
    },
    "internetHeaderLength": 5,
    "DS": {
      "DSCP": 0,
      "ECN": 0
    },
    "totalLength": 60,
    "identification": 123,
    "flags": 0,
    "fragmentOffset": 0,
    "timeToLive": 64,
    "protocol": 6,
    "headerChecksum": 5678,
    "sourceIPAddress": "192.168.0.1",
    "sourceDestinationAddress": "192.168.0.2"
  },
  "trailer": {
    "errorDetection": 65535,
    "frameStop": 171
  }
}
```
