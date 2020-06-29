<?php
include('cors.php');
include('database.php');


$data = json_decode(file_get_contents("php://input"), true);

 $idState = $data['idState'];
 $active = $data['active'];
 $modelo = new Conexion();
 $database = $modelo->getConnection();
 
 $sql = "UPDATE States set active = '$active' where idState = '$idState'" ;

      $query = $database->prepare($sql);
   $query->execute();

echo "registrado";

 
 
?>