<?php
include('cors.php');
include('database.php');

$array = array();
$modelo = new Conexion();
$database = $modelo->getConnection();
$sql = 'SELECT S.idState, S.nameState, T.idTown, T.nameTown from Towns T where T.active = true
inner join States S on T.idState = S.idState';
$query = $database->prepare($sql);
$query->execute();
    while($fila = $query->fetch()){
        $array[] = array(
            "idState" => $fila['idState'],
            "nameState" => $fila['nameState'],
            "towns" => $towns[] = array(
                "idTown" => $fila['idTown'],
                "nameTown" => $fila['nameTown']
            )
        );
    }
    $json = json_encode($array);
    echo $json;
?>