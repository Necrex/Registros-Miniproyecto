<?php
include('cors.php');
include('database.php');


$data = json_decode(file_get_contents("php://input"), true);

 $id = $data['id'];
 $nameCitizen = $data['nameCitizen'];
 $direction = $data['direction'];
 $state = $data['state'];
 $town = $data['town'];
 $phone = $phone['phone'];
 $modelo = new Conexion();
 $database = $modelo->getConnection();
 
 $sql = "UPDATE Citizens set nameCitizen = '$nameCitizen', direction = '$direction', state = '$state', town = '$town', phone = '$phone' where id = '$id'";

      $query = $database->prepare($sql);

   $query->execute();

echo "Actualizado";
?>