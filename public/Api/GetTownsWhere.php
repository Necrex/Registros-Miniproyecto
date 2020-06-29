<?php
include('cors.php');
include('database.php');

$array=array();
$data = json_decode(file_get_contents("php://input"), true);
$id = $data['idState'];

$modelo = new Conexion();
$database = $modelo->getConnection();

 $sql = "SELECT idTown, nameTown FROM Towns WHERE idState='$id' and active = true";
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

