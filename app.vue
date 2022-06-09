<template>
  <div>
    <Meta charset="utf-8" />
    <Meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <Meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <Meta name="description" content="Foores - Single Restaurant Version" />
    <Meta name="author" content="Ansonika" />
    <Title>Welly Dance STudio</Title>

    <!-- Favicons-->
    <!-- <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" /> -->
    <!-- <link
      rel="apple-touch-icon"
      type="image/x-icon"
      href="img/apple-touch-icon-57x57-precomposed.png"
    />
    <link
      rel="apple-touch-icon"
      type="image/x-icon"
      sizes="72x72"
      href="img/apple-touch-icon-72x72-precomposed.png"
    />
    <link
      rel="apple-touch-icon"
      type="image/x-icon"
      sizes="114x114"
      href="img/apple-touch-icon-114x114-precomposed.png"
    />
    <link
      rel="apple-touch-icon"
      type="image/x-icon"
      sizes="144x144"
      href="img/apple-touch-icon-144x144-precomposed.png"
    /> -->

    <!-- GOOGLE WEB FONT -->
    <Link rel="preconnect" href="https://fonts.googleapis.com" />
    <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <Link
      href="https://fonts.googleapis.com/css2?family=Lora:ital@1&family=Poppins:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <!-- BASE CSS -->
    <Link href="css/vendors.min.css" rel="stylesheet" />
    <Link href="css/style.css" rel="stylesheet" />

    <!-- SPECIFIC CSS -->
    <Link href="css/wizard.css" rel="stylesheet" />

    <!-- YOUR CUSTOM CSS -->
    <Link href="css/custom.css" rel="stylesheet" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <!-- COMMON SCRIPTS -->
    <Script src="js/common_scripts.min.js"></Script>
    <Script src="js/slider.js" defer></Script>
    <Script src="js/common_func.js" defer></Script>

    <!-- SPECIFIC SCRIPTS (wizard form) -->
    <Script src="js/wizard/wizard_scripts.min.js"></Script>
    <Script src="js/wizard/wizard_func.js"></Script>
  </div>
</template>
