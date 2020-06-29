<?php
include('cors.php');
include('database.php');

$array = array();
$modelo = new Conexion();
$database = $modelo->getConnection();
$sql = 'SELECT idState, nameState from States where active = true order by nameState asc';
$query = $database->prepare($sql);
$query->execute();
    while($fila = $query->fetch()){
        $array[] = array(
            "idState" => $fila['idState'],
            "nameState" => $fila['nameState'],
        );
    }
    $json = json_encode($array);
    echo $json;
?>