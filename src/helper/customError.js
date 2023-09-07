
export class CustomError extends Error {
    constructor(codigo,motivo) {
      super(codigo,motivo)
      this.codigo = codigo
      this.motivo = motivo
    }
  
  }