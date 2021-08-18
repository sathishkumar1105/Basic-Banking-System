<<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root','transaction', '', '', '');

// get the post records
$Sendername = $_POST['Sendername'];
$Senderemail = $_POST['Senderemail'];
$senderphoneno = $_POST['Senderphoneno'];
$receivername = $_POST['Receivername'];
$Transferamount = $_POST['Transferamount'];
$Date = $_POST['Date'];

// database insert SQL code
$sql = "INSERT INTO `tbl_contact` (`Serial Id`, `Sendername`, `Senderemail`, `SenderPhoneno`, `Receivername`, `Transferamount`, `Date`) VALUES ('0', '$Sendername', '$Senderemail', '$senderphoneno', '$receivername', `$Transferamount`, `$Date`)";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
  echo "Contact Records Inserted";
}

?>