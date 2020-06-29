<?php
include('cors.php');
include('database.php');


$data = json_decode(file_get_contents("php://input"), true);

 $idTown = $data['idTown'];
 $active = $data['active'];
 $modelo = new Conexion();
 $database = $modelo->getConnection();
 
 $sql = "UPDATE Towns set active = '$active' where idTown = '$idTown'" ;

      $query = $database->prepare($sql);
   $query->execute();

echo "registrado";

 
 
?>