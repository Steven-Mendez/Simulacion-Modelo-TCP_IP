export class TCPHeader<ApplicationLayerData> {
  // Campo de 16 bits utilizado para identificar la aplicación de origen por número de puerto.
  public sourcePort: number;

  // Un campo de 16 bits utilizado para identificar la aplicación de destino por puerto número.
  public destinationPort: number;

  // Campo de 32 bits utilizado para re-ensamblar datos.
  public sequenceNumber: number;

  // Un campo de 32 bits utilizado para indicar que se han recibido datos y el siguiente byte esperado de la fuente.
  public acknowledgementNumber: number;

  // Un campo de 4 bits conocido como «desplazamiento de datos» que indica la propiedad longitud del encabezado del segmento TCP.
  public headerLength: number;

  // Un campo de 6 bits que está reservado para uso futuro.
  public reserved: number;

  // Un campo de 6 bits utilizado que incluye códigos de bits, o indicadores, que indican el propósito y función del segmento TCP.
  public controlBits: number;

  // Un campo de 16 bits utilizado para indicar el número de bytes que se pueden aceptar a la vez.
  public windowSize: number;

  // Un campo de 16 bits utilizado para la verificación de errores en la cabecera del segmento y los datos.
  public checksum: number;

  // Campo de 16 bits utilizado para indicar si los datos contenidos son urgentes.
  public urgent: number;

  // Campo de 0 a 32 bits utilizado para almacenar opciones de control de transmisión.
  public options: [number?, number?, number?] | null;

  // Campo de longitud variable utilizado para almacenar datos de la capa de aplicación.
  public applicationLayerData: ApplicationLayerData;

  constructor(applicationLayerData: ApplicationLayerData) {
    this.applicationLayerData = applicationLayerData;
  }
}

export class UDPHeader<ApplicationLayerData> {
  public sourcePort: number;
  public destinationPort: number;
  public length: number;
  public checksum: number;
  public applicationLayerData: ApplicationLayerData;

  constructor(applicationLayerData: ApplicationLayerData) {
    this.applicationLayerData = applicationLayerData;
  }
}
