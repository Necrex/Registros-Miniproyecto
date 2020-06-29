<?php
include('cors.php');
include('database.php');


$data = json_decode(file_get_contents("php://input"), true);

 $nameState = $data['nameState'];
 $modelo = new Conexion();
 $database = $modelo->getConnection();
 
 $sql = "SELECT idState, nameState from States where Upper(nameState) like Upper('$nameState%')";

   $query = $database->prepare($sql);
   $query->execute();
      
  while($fila = $query->fetch()) {
    $array[] = array(
      "idState" => $fila['idState'],
      "nameState" => $fila['nameState'] 
    ); 
  } 

      $json = json_encode($array);
    echo $json;
?>