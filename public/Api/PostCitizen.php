<?php
include('cors.php');
include('database.php');


$data = json_decode(file_get_contents("php://input"), true);

 $name = $data['name'];
 $direction = $data['direction'];
 $state = $data['state'];
 $town = $data['town'];
 $phone = $data['phone'];
 $modelo = new Conexion();
 $database = $modelo->getConnection();
 
 $sql = "INSERT into empleados(name, direction, state, town, phone) 
         values(:name, :direction, :state, :town, :phone)";

      $query = $database->prepare($sql);
      $query->bindParam(':name', $name);
      $query->bindParam(':direction', $direction);
      $query->bindParam(':state', $state);
      $query->bindParam(':town', $town);
      $query->bindParam(':phone', $phone);

   $query->execute();

echo "registrado";

 
 
?>