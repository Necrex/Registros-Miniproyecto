<?php
include('cors.php');
include('database.php');


$data = json_decode(file_get_contents("php://input"), true);

 $nameTown = $data['nameTown'];
 $idState = $data['idState'];
 $modelo = new Conexion();
 $database = $modelo->getConnection();
 
 $sql = "SELECT idTown, nameTown from Towns where Upper(nameTown) like Upper('%$nameTown%') and idState='$idState'";

   $query = $database->prepare($sql);
   $query->execute();
      
  while($fila = $query->fetch()) {
    $array[] = array(
      "idTown" => $fila['idTown'],
      "nameTown" => $fila['nameTown'] 
    ); 
  } 

      $json = json_encode($array);
    echo $json;
?>