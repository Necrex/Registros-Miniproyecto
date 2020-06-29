<?php
include('cors.php');
include('database.php');


$data = json_decode(file_get_contents("php://input"), true);

 $idState = $data['idState'];
 $nameState = $data['nameTown'];
 $modelo = new Conexion();
 $database = $modelo->getConnection();
 
 $sql = "INSERT into Towns(idState, nameTown) values(:idState, :nameTown)";

      $query = $database->prepare($sql);
      $query->bindParam(':idState', $idState);
      $query->bindParam(':nameTown', $nameState);

   $query->execute();

echo "registrado";

 
 
?>