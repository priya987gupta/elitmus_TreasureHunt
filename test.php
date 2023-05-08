<!DOCTYPE html>
<html>
<head>
<title>Table with database</title>
<style>


table {
border-collapse: collapse;
width: 100%;
color:brown;
font-family: monospace;
font-size: 25px;
text-align: left;
}
 th {
 border-collapse: collapse;
background-color: brown;
color: white; 


}   



h1
{
    text-align:center;
    color:white;
    background:brown;
}
tr:nth-child(even) {background-color: #f2f2f2} 
</style>
</head>
<body>
    <h1>PLAYER INFORMATION</h1>
<table>
<tr>
<th>Id</th>
<th>Username</th>
<th>Email</th>
<th>User_Type</th>
</tr>
<?php
$conn = mysqli_connect("localhost", "root", "", "user_db");

if ($conn->connect_error) {
die("Connection failed: " . $conn->connect_error);
}
$sql = "SELECT id,name,email,user_type FROM user_form";
$result = $conn->query($sql);
if ($result->num_rows > 0) {

while($row = $result->fetch_assoc()) {
echo "<tr><td>" . $row["id"]. "</td><td>" . $row["name"] . "</td><td>"
. $row["email"]. "</td><td>". $row["user_type"]. "</td></tr>";
}
echo "</table>";
} else { echo "0 results"; }
$conn->close();
?> 
</table>
</body>
</html>