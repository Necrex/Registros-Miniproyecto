<?php
include('cors.php');
include('database.php');


$data = json_decode(file_get_contents("php://input"), true);

 $nameTown = $data['nameTown'];
 $idTown = $data['idTown'];
 $idState = $data['idState'];
 $modelo = new Conexion();
 $database = $modelo->getConnection();
 
 $sql = "UPDATE Towns set nameTown = '$nameTown', idState = '$idState'  where idTown = '$idTown'";

      $query = $database->prepare($sql);
      $query->bindParam(':nameTown', $nameTown);

   $query->execute();

echo "Actualizado";
?>