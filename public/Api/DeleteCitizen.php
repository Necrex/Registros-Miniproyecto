<?php
include('cors.php');
include('database.php');


$data = json_decode(file_get_contents("php://input"), true);

 $id = $data['id'];
 $active = $data['active'];
 $modelo = new Conexion();
 $database = $modelo->getConnection();
 
 $sql = "UPDATE Citizens set active = '$active' where id = '$id'" ;

      $query = $database->prepare($sql);
   $query->execute();

echo "registrado";

 
 
?>