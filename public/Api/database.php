<?php
    class Conexion {
        public function getConnection(){
            $host = "localhost";
            $db = "Registers";
            $user = "root";
            $pass = "root";

            $database = new PDO("mysql:host=$host;dbname=$db;", $user, $pass);

            return $database;
        }
    }
?>