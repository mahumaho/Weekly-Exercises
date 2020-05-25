<?php
$server = "zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
$user = "rv8kk7ab6a9led76";
$pwd = "co5p03pim1xq00me";
$database = "s3ykxtpz1s85tbul";

$connection = new mysqli($server, $user, $pwd, $database);
if ($connection->connect_error) {
    echo $connection->connect_error;
} else {
    echo "connection created";
}
$sql = "select * from Users";
$result = $connection->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo $row['id'] . ['username'] . $row['password'] . $row['name'] . "<br>";
    }
} else {
    echo "no result in table";
}
$connection->close();
