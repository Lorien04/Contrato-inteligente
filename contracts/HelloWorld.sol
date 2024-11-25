// Especifica la versión de Solidity, utilizando la versión semántica.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity ^0.8.28;

// Defines a contract named `HelloWorld`.
// Un contrato es una colección de funciones y datos (su estado).
contract HelloWorld {

   // Las variables de estado son variables cuyos valores se almacenan permanentemente en el almacenamiento del contrato.
   string public message;

   // Los constructores se utilizan para inicializar los datos del contrato.
   constructor(string memory initMessage) {

      message = initMessage;
   }

   // Una función pública que acepta un argumento de cadena y actualiza la variable de almacenamiento 'mensaje'.
   function update(string memory newMessage) public {
      message = newMessage;
   }
}
