export class IPV4Header<TransportLayerData> {
  // Contiene un valor binario de 4 bits establecido en 0100 que identifica esto como un paquete IPv4.
  public version: number = 0b0100;

  // Contiene un valor binario de 4 bits que indica la longitud del encabezado de Internet en palabras de 32 bits.
  public internetHeaderLength: number;

  // DiffServices Servicio Diferenciados formalmente conocido como Tipo de Servicio(ToS), es un campo de 8 bits que se utiliza para indicar la prioridad de un paquete de datos.
  public DS: {
    // Código de servicios diferenciados (DSCP) de 6 bits.
    DSCP: number;

    // Notificación de congestión explicita (ECN) de 2 bits.
    ECN: number;
  };
  // Contiene un valor binario de 16 bits que indica el tamaño total del paquete de datos, incluido el encabezado y los datos.
  public totalLength: number;

  // Contiene un valor binario de 16 bits que se utiliza para identificar de forma única un paquete de datos.
  public identification: number;

  // Contiene un valor binario de 3 bits que se utiliza para indicar si el paquete de datos es fragmentado o no.
  public flags: number;

  // Contiene un valor binario de 13 bits que se utiliza para indicar la posición de un fragmento de datos dentro de un paquete de datos.
  public fragmentOffset: number;

  // Contiene un valor binario de 8 bits que se utiliza para indicar el tiempo de vida del paquete de datos.
  public timeToLive: number;

  // Contiene un valor binario de 8 bits que se utiliza para identificar el protocolo de transporte utilizado en el paquete de datos.
  public protocol: number;

  // Contiene un valor binario de 16 bits que se utiliza para verificar la integridad del encabezado de Internet.
  public headerChecksum: number;

  // Contiene un valor binario de 32 bits que se utiliza para identificar la fuente del paquete de datos.
  public sourceIPAddress: string;

  // Contiene un valor binario de 32 bits que se utiliza para identificar el destino del paquete de datos.
  public sourceDestinationAddress: string;

  // Campo utilizado para almacenar datos de la capa de transporte.
  public transportLayerData: TransportLayerData;

  constructor(transportLayerData: TransportLayerData) {
    this.transportLayerData = transportLayerData;
  }
}

export class IPV6Header<TransportLayerData> {
  public version: number = 0b0110;
  public trafficClass: number;
  public flowLabel: number;
  public payloadLength: number;
  public nextHeader: number;
  public hopLimit: number;
  public sourceAddress: string;
  public destinationAddress: string;

  public transportLayerData: TransportLayerData;

  constructor(transportLayerData: TransportLayerData) {
    this.transportLayerData = transportLayerData;
  }
}
