<?php
header('Content-Type: application/json');
include 'koneksi.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $date = $_POST['date'] ?? '';

    if ($name && $email && $date) {
        $stmt = $pdo->prepare("INSERT INTO pemesanan (name, email, date) VALUES (?, ?, ?)");
        $stmt->execute([$name, $email, $date]);

        echo json_encode(['message' => 'Pemesanan tiket berhasil!']);
    } else {
        echo json_encode(['message' => 'Semua field harus diisi.']);
    }
}
?>
