export const initialState = {
  productListState: {
    autor: {
      name: '',
      lastname: ''
    },
    categories: [],
    items: [],
    fetchDone: false
  },
  productSelectedState: {
    autor: {
      name: '',
      lastname: ''
    },
    categories: [],
    item: {
      id: '',
      title: '',
      price: {
        currency: '',
        amount: null,
        decimals: null,
      },
      picture: '',
      condition: '',
      freeShipping: null,
      soldQuantity: null,
      description: ''
    },
    fetchDone: false
  }
};

export const justProductListDataState = {
  productListState: {
    autor: { name: "Wilson Ramon", lastname: "Martinez Barrera" },
    categories: ["Pelotas"],
    items: [
      {
        id: "MLA713100826",
        title: "Pelotita Pelota De Metegol X 10 Unidades",
        price: { currency: "ARS", amount: 703, decimals: 0 },
        picture:
          "http://http2.mlstatic.com/D_702840-MLA32541925368_102019-I.jpg",
        condition: "new",
        freeShipping: true,
        location: "San Cristóbal - Capital Federal - Argentina",
      },
      {
        id: "MLA1256015714",
        title:
          "Pelota De Fútbol Dribbling Pelota De Fútbol Fifa Qatar 2022 Nº 5 Color Blanco Y Bordó",
        price: { currency: "ARS", amount: 10090, decimals: 0 },
        picture:
          "http://http2.mlstatic.com/D_794706-MLA52126811666_102022-I.jpg",
        condition: "new",
        freeShipping: true,
        location: "Palermo Hollywood - Capital Federal - Argentina",
      },
      {
        id: "MLA1393118064",
        title: "Pelota De Fútbol Libercam Pefut-800 Nº 5 Color Azul",
        price: { currency: "ARS", amount: 3999, decimals: 0 },
        picture:
          "http://http2.mlstatic.com/D_783925-MLA54435449114_032023-I.jpg",
        condition: "new",
        freeShipping: false,
        location: "Boedo - Capital Federal - Argentina",
      },
      {
        id: "MLA842081099",
        title: "Pelota Macu 18 Cm Didáctica Goma Espuma Sharif Express",
        price: { currency: "ARS", amount: 1755, decimals: 0 },
        picture:
          "http://http2.mlstatic.com/D_635899-MLA51554003400_092022-I.jpg",
        condition: "new",
        freeShipping: false,
        location: "San Cristobal - Capital Federal - Argentina",
      },
    ],
    fetchDone: true
  },
  productSelectedState: {
    autor: {
      name: '',
      lastname: ''
    },
    categories: [],
    item: {
      id: '',
      title: '',
      price: {
        currency: '',
        amount: null,
        decimals: null,
      },
      picture: '',
      condition: '',
      freeShipping: null,
      soldQuantity: null,
      description: ''
    },
    fetchDone: false
  }
};

export const justProductSelectedDataState = {
  productListState: {
    autor: {
      name: '',
      lastname: ''
    },
    categories: [],
    items: [],
    fetchDone: false
  },
  productSelectedState: {
    autor: { name: "Wilson Ramon", lastname: "Martinez Barrera" },
    categories: [
      "Juegos y Juguetes",
      "Juegos de Salón",
      "Metegol",
      "Accesorios",
    ],
    item: {
      id: "MLA713100826",
      title: "Pelotita Pelota De Metegol X 10 Unidades",
      price: { currency: "ARS", amount: 703, decimals: 0 },
      picture: "http://http2.mlstatic.com/D_702840-MLA32541925368_102019-I.jpg",
      condition: "new",
      freeShipping: false,
      soldQuantity: 750,
      description:
        "PELOTAS DE METEGOL X 10\n\nMEDIDA ESTANDAR 3 CM\nMACIZAS \nPERFECTAS PARA CUALQUIER METEGOL\n\n\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n::::::::PREGUNTAS FRECUENTES::::::::\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n\n¿CÓMO COMPRAR?\n- - - - - - - - - - - - - - - - -\n- Hacé Click en COMPRAR. Luego, seleccioná el medio de pago y la forma de envío. También, podés retirar tu compra por nuestro LOCAL.\n-Una vez acreditado el pago recibirás un mensaje privado en el detalle de la compra con todos nuestros datos de contacto.\n\n¿CUÁLES SON LOS MEDIOS DE PAGO?\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n- Aceptamos todos los medios de pago a través de Mercado Pago. Allí podrás abonar con tarjetas de crédito, débito o en efectivo, a través de Rapipago/Pago Fácil.\n\n¿PUEDO RETIRAR MI PEDIDO EN PERSONALMENTE?\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n- Sí, para ello deberás elegir la opción de »¡RETIRO EN DOMICILIO DEL VENDEDOR!\n- Una vez confirmada la compra, coordinaremos la entrega para que la puedas retirar acercandote a nuestro LOCAL. El producto estará disponible de forma inmediata después de haber realizado la compra.\n\n¿EN QUE ZONA SE ENCUENTRAN?\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n- Nuestro local a la calle se encuentra en el Barrio de San Cristóbal a 2 cuadras de la «Estación Jujuy» de la «Línea E» del subte, CABA.\n- Los horarios de atención son:\n- - Lunes a Viernes de 9.00 a 18.00 H\n- - Sábados de 10.00 a 13.00 H\n\n¿QUÉ DEBO LLEVAR AL MOMENTO DEL RETIRO?\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n- Si sos el TITULAR de la compra deberás presentar tu D.N.I.\n- Si NO sos el titular de la compra deberás presentarte con fotocopia del D.N.I. del Titular de MercadoLibre.\n\n¿HACEN ENVÍOS A DOMICILIO?\n- - - - - - - - - - - - - - - - - - - - - - - - - -\n- Sí. Solo enviamos por MERCADO ENVÍOS. No se utilizan correos alternativos. El costo es por cuenta y orden del comprador.\n\n»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»\n¡VERIFICAR LA DIRECCIÓN ANTES DE COMPRAR! ¡Una vez confirmada la Compra e ingresados los datos de la entrega, los mismos no pueden modificarse. Para solucionar el inconveniente se deberá CANCELAR la compra y luego realizarla nuevamente con el DOMICILIO CORRECTO!\n»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»\n\n¿TODOS LOS PRODUCTOS SON NUEVOS?¿Y TIENEN GARANTÍA?\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n- Los productos son nuevos y originales. La garantía de los mismos por parte del vendedor es de 30 días desde el día de la compra.\n\n¿CÓMO ES LA FACTURACIÓN?¿FACTURA A O B?\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n- Por defecto siempre emitimos Ticket B. Si querés Factura A, debés solicitarlas al momento de realizar la compra y enviarnos los siguientes datos:\n- - CUIT, Razón Social, Dirección Fiscal (Provincia, Localidad), Teléfono y Condición de IVA.\n\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nGracias por visitarnos!\n\nLos esperamos\nen nuestro e-Shop Oficial\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n\nJuguetería - Mi Cielo Azul\n«Crecer Jugando»",
    },
    fetchDone: true
  }
};

export const fullDataState = {
  productListState: {
    autor: { name: "Wilson Ramon", lastname: "Martinez Barrera" },
    categories: ["Pelotas"],
    items: [
      {
        id: "MLA713100826",
        title: "Pelotita Pelota De Metegol X 10 Unidades",
        price: { currency: "ARS", amount: 703, decimals: 0 },
        picture:
          "http://http2.mlstatic.com/D_702840-MLA32541925368_102019-I.jpg",
        condition: "new",
        freeShipping: false,
        location: "San Cristóbal - Capital Federal - Argentina",
      },
      {
        id: "MLA1256015714",
        title:
          "Pelota De Fútbol Dribbling Pelota De Fútbol Fifa Qatar 2022 Nº 5 Color Blanco Y Bordó",
        price: { currency: "ARS", amount: 10090, decimals: 0 },
        picture:
          "http://http2.mlstatic.com/D_794706-MLA52126811666_102022-I.jpg",
        condition: "new",
        freeShipping: true,
        location: "Palermo Hollywood - Capital Federal - Argentina",
      },
      {
        id: "MLA1393118064",
        title: "Pelota De Fútbol Libercam Pefut-800 Nº 5 Color Azul",
        price: { currency: "ARS", amount: 3999, decimals: 0 },
        picture:
          "http://http2.mlstatic.com/D_783925-MLA54435449114_032023-I.jpg",
        condition: "new",
        freeShipping: false,
        location: "Boedo - Capital Federal - Argentina",
      },
      {
        id: "MLA842081099",
        title: "Pelota Macu 18 Cm Didáctica Goma Espuma Sharif Express",
        price: { currency: "ARS", amount: 1755, decimals: 0 },
        picture:
          "http://http2.mlstatic.com/D_635899-MLA51554003400_092022-I.jpg",
        condition: "new",
        freeShipping: false,
        location: "San Cristobal - Capital Federal - Argentina",
      },
    ],
    fetchDone: true
  },
  productSelectedState: {
    autor: { name: "Wilson Ramon", lastname: "Martinez Barrera" },
    categories: [
      "Juegos y Juguetes",
      "Juegos de Salón",
      "Metegol",
      "Accesorios",
    ],
    item: {
      id: "MLA713100826",
      title: "Pelotita Pelota De Metegol X 10 Unidades",
      price: { currency: "ARS", amount: 703, decimals: 0 },
      picture: "http://http2.mlstatic.com/D_702840-MLA32541925368_102019-I.jpg",
      condition: "new",
      freeShipping: false,
      soldQuantity: 750,
      description:
        "PELOTAS DE METEGOL X 10\n\nMEDIDA ESTANDAR 3 CM\nMACIZAS \nPERFECTAS PARA CUALQUIER METEGOL\n\n\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n::::::::PREGUNTAS FRECUENTES::::::::\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n\n¿CÓMO COMPRAR?\n- - - - - - - - - - - - - - - - -\n- Hacé Click en COMPRAR. Luego, seleccioná el medio de pago y la forma de envío. También, podés retirar tu compra por nuestro LOCAL.\n-Una vez acreditado el pago recibirás un mensaje privado en el detalle de la compra con todos nuestros datos de contacto.\n\n¿CUÁLES SON LOS MEDIOS DE PAGO?\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n- Aceptamos todos los medios de pago a través de Mercado Pago. Allí podrás abonar con tarjetas de crédito, débito o en efectivo, a través de Rapipago/Pago Fácil.\n\n¿PUEDO RETIRAR MI PEDIDO EN PERSONALMENTE?\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n- Sí, para ello deberás elegir la opción de »¡RETIRO EN DOMICILIO DEL VENDEDOR!\n- Una vez confirmada la compra, coordinaremos la entrega para que la puedas retirar acercandote a nuestro LOCAL. El producto estará disponible de forma inmediata después de haber realizado la compra.\n\n¿EN QUE ZONA SE ENCUENTRAN?\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n- Nuestro local a la calle se encuentra en el Barrio de San Cristóbal a 2 cuadras de la «Estación Jujuy» de la «Línea E» del subte, CABA.\n- Los horarios de atención son:\n- - Lunes a Viernes de 9.00 a 18.00 H\n- - Sábados de 10.00 a 13.00 H\n\n¿QUÉ DEBO LLEVAR AL MOMENTO DEL RETIRO?\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n- Si sos el TITULAR de la compra deberás presentar tu D.N.I.\n- Si NO sos el titular de la compra deberás presentarte con fotocopia del D.N.I. del Titular de MercadoLibre.\n\n¿HACEN ENVÍOS A DOMICILIO?\n- - - - - - - - - - - - - - - - - - - - - - - - - -\n- Sí. Solo enviamos por MERCADO ENVÍOS. No se utilizan correos alternativos. El costo es por cuenta y orden del comprador.\n\n»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»\n¡VERIFICAR LA DIRECCIÓN ANTES DE COMPRAR! ¡Una vez confirmada la Compra e ingresados los datos de la entrega, los mismos no pueden modificarse. Para solucionar el inconveniente se deberá CANCELAR la compra y luego realizarla nuevamente con el DOMICILIO CORRECTO!\n»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»»\n\n¿TODOS LOS PRODUCTOS SON NUEVOS?¿Y TIENEN GARANTÍA?\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n- Los productos son nuevos y originales. La garantía de los mismos por parte del vendedor es de 30 días desde el día de la compra.\n\n¿CÓMO ES LA FACTURACIÓN?¿FACTURA A O B?\n- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -\n- Por defecto siempre emitimos Ticket B. Si querés Factura A, debés solicitarlas al momento de realizar la compra y enviarnos los siguientes datos:\n- - CUIT, Razón Social, Dirección Fiscal (Provincia, Localidad), Teléfono y Condición de IVA.\n\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\nGracias por visitarnos!\n\nLos esperamos\nen nuestro e-Shop Oficial\n-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-\n\nJuguetería - Mi Cielo Azul\n«Crecer Jugando»",
    },
    fetchDone: true
  }
};

export const noProductListItems = {
  productListState: {
    autor: { name: "Wilson Ramon", lastname: "Martinez Barrera" },
    categories: [],
    items: [],
    fetchDone: true
  },
  productSelectedState: {
    autor: {
      name: '',
      lastname: ''
    },
    categories: [],
    item: {
      id: '',
      title: '',
      price: {
        currency: '',
        amount: null,
        decimals: null,
      },
      picture: '',
      condition: '',
      freeShipping: null,
      soldQuantity: null,
      description: ''
    },
    fetchDone: false
  }
};

export const noProductSelectedItem = {
  productListState: {
    autor: { name: "Wilson Ramon", lastname: "Martinez Barrera" },
    categories: [],
    items: [],
    fetchDone: true
  },
  productSelectedState: {
    autor: {
      name: '',
      lastname: ''
    },
    categories: [],
    item: null,
    fetchDone: true
  }
};
