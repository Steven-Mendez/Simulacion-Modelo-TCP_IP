// Aplicaciones que usan TCP
export class HTTP {
  public data: string;

  constructor(data: string) {
    this.data = data;
  }
}

export class HTTPS extends HTTP {
  constructor(data: string) {
    // Aquí iría la lógica para encriptar el mensaje
    super(`Imagina que está encriptado: ${data}`);
  }
}

export class FTP {
  public data: string;

  constructor(data: string) {
    this.data = data;
  }
}

export class SMTP {
  public data: string;

  constructor(data: string) {
    this.data = data;
  }
}

export class SSH {
  public data: string;

  constructor(data: string) {
    this.data = data;
  }
}

// Aplicaciones que usan UDP
export class DHCP {
  public data: string;

  constructor(data: string) {
    this.data = data;
  }
}

export class DNS {
  public data: string;

  constructor(data: string) {
    this.data = data;
  }
}

export class SNMP {
  public data: string;

  constructor(data: string) {
    this.data = data;
  }
}

export class TFTP {
  public data: string;

  constructor(data: string) {
    this.data = data;
  }
}

export class VoIP {
  public data: string;

  constructor(data: string) {
    this.data = data;
  }
}

export class VideoConferencing {
  public data: string;

  constructor(data: string) {
    this.data = data;
  }
}
