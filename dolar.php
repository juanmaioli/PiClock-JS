<?php

$fecha = new DateTime(date("Y-m-d H:i:s"));
$fecha = $fecha->format('Y-m-d H:i:s');

// URL de la página a la que queremos acceder
$urlOficial = 'https://dolarhoy.com/i/cotizaciones/dolar-bancos-y-casas-de-cambio';
$urlBlue = 'https://dolarhoy.com/i/cotizaciones/dolar-blue';

// Inicializar cURL
$curl = curl_init();

// Configurar la solicitud cURL con la URL
curl_setopt($curl, CURLOPT_URL, $urlOficial);

// Configurar para que cURL devuelva el resultado en lugar de imprimirlo
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Ejecutar la solicitud cURL
$response = curl_exec($curl);

// Verificar si hay errores
if ($response === false) {
    // Si hay errores, imprimir el mensaje de error
    echo 'Error al obtener el contenido: ' . curl_error($curl);
} else {
// Patrón de expresión regular para encontrar los valores
$pattern = '/<p>([\d\.]+)<span>(Compra|Venta)<\/span><\/p>/';

// Configurar la solicitud cURL con la URL
curl_setopt($curl, CURLOPT_URL, $urlBlue);

// Configurar para que cURL devuelva el resultado en lugar de imprimirlo
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

// Ejecutar la solicitud cURL
$responseBlue = curl_exec($curl);

// Verificar si hay errores
if ($responseBlue === false) {
    // Si hay errores, imprimir el mensaje de error
    echo 'Error al obtener el contenido: ' . curl_error($curl);
} else {
// Patrón de expresión regular para encontrar los valores
$patternBlue = '/<p>([\d\.]+)<span>(Compra|Venta)<\/span><\/p>/';
}









// Se ejecuta la búsqueda de la expresión regular en el HTML
preg_match_all($pattern, $response, $matches);
preg_match_all($patternBlue, $responseBlue, $matchesBlue);

// Se crea un array asociativo para almacenar los valores encontrados
$result = array(
    'CompraOficial' => $matches[1][0], // El valor de compra
    'VentaOficial' => $matches[1][1],   // El valor de venta
    'CompraBlue' => $matchesBlue[1][0], // El valor de compra
    'VentaBlue' => $matchesBlue[1][1],   // El valor de venta
);

// array_push($result, 'VentaBlue'=777);
// Se convierte el array asociativo a formato JSON
$json = json_encode($result);

// Se muestra el JSON resultante
echo $json;
}

// Cerrar la sesión cURL
curl_close($curl);
// echo $valorOficial;
?>