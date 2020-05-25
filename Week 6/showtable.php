<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Show my record</title>
</head>
<body>
<table>
    <tr>
        <th>ID</th>
        <th>Username</th>
        <th>Password</th>
        <th>Name</th>
    </tr>
    <?php $server = "zj2x67aktl2o6q2n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
    $user = "rv8kk7ab6a9led76";
    $pwd = "co5p03pim1xq00me";
    $database = "s3ykxtpz1s85tbul";

    $connection = new mysqli($server, $user, $pwd, $database);
    if ($connection->connect_error) {
        echo $connection->connect_error;
    } else {
        echo "connection created";
    }
    $sql = "select * from users";
    $result = $connection->query($sql);

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo "</tr>";
            echo "<td>".$row['id']."</td>";
            echo "<td>".$row['username']."</td>";
            echo "<td>".$row['password']."</td>";
            echo "<td>".$row['name']."</td>";
            echo "</tr>";
        }
    } else {
        echo "no result in table";
    }
    $connection->close();
    ?>
</table>
</body>
</html>