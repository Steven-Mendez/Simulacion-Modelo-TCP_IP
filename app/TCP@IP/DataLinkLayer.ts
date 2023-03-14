export class DataLinkFrame<NetworkLayerData> {
  header: {
    // Contiene un valor binario de 8 bits que se utiliza para indicar el inicio de un paquete de datos.
    frameStart: number;

    Addressing: {
      // Contiene un valor binario de 48 bits que se utiliza para identificar la fuente del paquete de datos.
      destinationMAC: string;

      // Contiene un valor binario de 48 bits que se utiliza para identificar el destino del paquete de datos.
      sourceMAC: string;
    };

    // Identifica el tipo de protocolo de nivel de red utilizado en el paquete de datos.
    type: number;

    // Identifica los servicios especiales de control de flujo utilizados en el paquete de datos, como calidad de servicio(QoS).
    control: number;
  };

  // Incluye el contenido del paquete de datos.
  packet: NetworkLayerData;

  trailer: {
    // Se incluye en el tráiler para verificar la integridad del paquete de datos.
    errorDetection: number;

    // Contiene un valor binario de 8 bits que se utiliza para indicar el final de un paquete de datos.
    frameStop: number;
  };
  constructor(packet: NetworkLayerData) {
    this.header = {
      frameStart: 0,
      Addressing: {
        destinationMAC: '',
        sourceMAC: '',
      },
      type: 0,
      control: 0,
    };
    this.packet = packet;
    this.trailer = {
      errorDetection: 0,
      frameStop: 0,
    };
  }
}
