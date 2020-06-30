<?php
include('cors.php');
include('database.php');


$data = json_decode(file_get_contents("php://input"), true);

 $id = $data['id'];
 $modelo = new Conexion();
 $database = $modelo->getConnection();
 
 $sql = "SELECT id, nameCitizen, direction, state, town, phone from Citizens where id = '$id'";

   $query = $database->prepare($sql);
   $query->execute();
      
  while($fila = $query->fetch()) {
    $array[] = array(
      "id" => $fila['id'],
      "nameCitizen" => $fila['nameCitizen'],
      "direction" => $fila['direction'],
      "state" => $fila['state'],
      "town" => $fila['town'],
      "phone" => $fila['phone'] 
    ); 
  } 

      $json = json_encode($array);
    echo $json;
?>