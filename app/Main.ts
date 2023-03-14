import { HTTP } from './TCP@IP/ApplicationLayer';
import { TCPHeader } from './TCP@IP/TransportLayer';
import { IPV4Header } from './TCP@IP/NetworkLayer';
import { DataLinkFrame } from './TCP@IP/DataLinkLayer';

const http = new HTTP('Hello World');

const tcp = new TCPHeader(http);
tcp.sourcePort = 8080;
tcp.destinationPort = 80;
tcp.sequenceNumber = 12345;
tcp.acknowledgementNumber = 54321;
tcp.headerLength = 5;
tcp.reserved = 0;
tcp.controlBits = 2;
tcp.windowSize = 1024;
tcp.checksum = 1234;
tcp.urgent = 0;
tcp.options = [1, 2, 3];

const ipv4 = new IPV4Header(tcp);
ipv4.internetHeaderLength = 5;
ipv4.DS = { DSCP: 0, ECN: 0 };
ipv4.totalLength = 60;
ipv4.identification = 123;
ipv4.flags = 0;
ipv4.fragmentOffset = 0;
ipv4.timeToLive = 64;
ipv4.protocol = 6;
ipv4.headerChecksum = 5678;
ipv4.sourceIPAddress = '192.168.0.1';
ipv4.sourceDestinationAddress = '192.168.0.2';

const frame = new DataLinkFrame(ipv4);
frame.header.frameStart = 0b10101010;
frame.header.Addressing.destinationMAC = '00:11:22:33:44:55';
frame.header.Addressing.sourceMAC = 'aa:bb:cc:dd:ee:ff';
frame.header.type = 0x0800;
frame.header.control = 0;
frame.trailer.errorDetection = 0xffff;
frame.trailer.frameStop = 0b10101011;

console.log(JSON.stringify(frame, null, 2));
