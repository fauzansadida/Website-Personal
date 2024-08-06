<?php
header('Content-Type: application/json');
include 'koneksi.php';

$stmt = $pdo->query("SELECT * FROM pemesanan");
$bookings = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($bookings);
?>
