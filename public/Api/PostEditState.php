<?php
include('cors.php');
include('database.php');


$data = json_decode(file_get_contents("php://input"), true);

 $nameState = $data['nameState'];
 $idState = $data['idState'];
 $modelo = new Conexion();
 $database = $modelo->getConnection();
 
 $sql = "UPDATE States set nameState = '$nameState' where idState = '$idState'";

      $query = $database->prepare($sql);
      $query->bindParam(':nameState', $nameState);

   $query->execute();

echo "Actualizado";
?>