<?php
header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "restaurante";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT nombre, imagen, categoria, ingredientes, precio FROM menu";
$result = $conn->query($sql);

$menuItems = array();

if ($result->num_rows > 0) {
    // Output de cada fila
    while($row = $result->fetch_assoc()) {
        $menuItems[] = $row;
    }
} else {
    echo json_encode([]);
}

echo json_encode($menuItems);

$conn->close();
?>

