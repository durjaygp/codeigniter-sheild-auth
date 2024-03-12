<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo esc($title ?? 'Estás en') ?> | Automata ZEN</title>
    <?php
    $titlesForPreLoadImages = ['Contacto','Sobre Nosotros','Inicio'];
    if (in_array($title,$titlesForPreLoadImages)) {
        echo '<link rel="preload" href="/assets/img/avatars/diana1.webp" as="image">' . PHP_EOL;
        echo '<link rel="preload" href="/assets/img/avatars/ingrid1.webp" as="image">' . PHP_EOL;
        echo '<link rel="preload" href="/assets/img/avatars/jorge1.webp" as="image">' . PHP_EOL;
    }
    ?>
    <meta name="description" content="Excel y Analisis de Datos">
    <meta name="keywords" content="Excel, Bases de Datos, Analisis de Datos">
    <meta name="robots" content="index,follow">
    <meta name="viewport" content="width=device-width, maximum-scale=7, minimum-scale=1, initial-scale=1, user-scalable=yes, shrink-to-fit=no">
    <!-- Favicons -->
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo base_url('apple-touch-icon.png'); ?>">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo base_url('favicon-32x32.png'); ?>">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo base_url('favicon-16x16.png'); ?>">
    <link rel="manifest" href="<?php echo base_url('site.webmanifest'); ?>">

    <meta name="msapplication-TileColor" content="#FFFAD8">
    <meta name="theme-color" content="#FFFAD8">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..700;1,300..700&display=swap" rel="stylesheet">

    <!-- Template Main CSS Files -->
    <link rel="stylesheet" href="<?php echo base_url('assets/css/styles.css'); ?>?v=<?php echo uniqid(); ?>">

    <!--<link rel="stylesheet" href="<?php /*echo base_url('assets/css/styles.css'); */?>">-->

</head>

<body data-page="<?php echo $dataPage; ?>">
<?= $this->include('partials/header'); ?>
<main id="mainMaster">
    <?= $this->renderSection('content'); ?>
</main>
<footer>
    <?= $this->include('partials/footer'); ?>
</footer>
</body>
</html>