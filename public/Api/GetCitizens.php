<?php
include('cors.php');
include('database.php');

$array = array();
$active = true;
$modelo = new Conexion();
$database = $modelo->getConnection();
$sql = 'SELECT C.id, C.nameCitizen, C.direction, S.nameState, T.nameTown, C.phone  from Citizens C
inner join Towns T on C.town = T.idTown
inner join States S on T.idState = S.idState
where C.active = true order by C.nameCitizen';
$query = $database->prepare($sql);
$query->execute();

    while($fila = $query->fetch()){
        $array[] = array(
            "name" => $fila['nameCitizen'],
            "direction" => $fila['direction'],
            "state" => $fila['nameState'],
            "town" => $fila['nameTown'],
            "phone" => $fila['phone'],
        );
    }
    $json = json_encode($array);
    echo $json;
?>