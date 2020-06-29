<?php
include('cors.php');
include('database.php');


$data = json_decode(file_get_contents("php://input"), true);

 $nameState = $data['nameState'];
 $modelo = new Conexion();
 $database = $modelo->getConnection();
 
 $sql = "INSERT into States(nameState) 
         values(:nameState)";

      $query = $database->prepare($sql);
      $query->bindParam(':nameState', $nameState);

   $query->execute();

echo "registrado";

 
 
?>