<?php include("html.php"); ?>
<!DOCTYPE html>

<!-- <meta name="generator" content="HauHet" /> -->
<!-- <meta name="keywords" content="HauHet"> /> -->
<!-- header('x-powered-by: HauHet'); -->

<!-- 
//////////////////////////////////////////////////////

HauHet plc.
hauhet.co

We are HauHet
AI Energy Sector
Advanced Distribution Management System

Headquarters
HauHet plc. – Xolo Go OU
Private Limited Company

Kalasadama 4
10415 – Tallinn
Estonia

//////////////////////////////////////////////////////
-->

<html lang="en">

<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T9Z73XKQ');</script>
<!-- End Google Tag Manager -->

  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <!-- Meta description, aim for about 150 characters-->
  <meta http-equiv='content-language' content='en-gb'>
  <meta http-equiv="cleartype" content="on" />
  <meta name="MobileOptimized" content="width" />
  <meta name="HandheldFriendly" content="true" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="author" content="HauHet®"/>
  <meta name="generator" content="hauhet.co">
  <meta name="generator" content="hauhet.co">
  <meta property="og:image" content="static/img//USGS_logo.png" />
  <meta property="og:image:secure_url" content="static/img/USGS_logo.png" />
  <meta property="og:image:width" content="1280" />
  <meta property="og:image:height" content="1024" />
  
    <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png?v=1.0">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png?v=1.0">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png?v=1.0">
    <link rel="manifest" href="favicon/site.webmanifest?v=1.0">
    <link rel="mask-icon" href="favicon/safari-pinned-tab.svg?v=1.0" color="#5bbad5">
    <link rel="shortcut icon" href="favicon/favicon.ico?v=1.0">
    <meta name="apple-mobile-web-app-title" content="HauHet">
    <meta name="application-name" content="HauHet">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="favicon/mstile-144x144.png?v=1.0">
    <meta name="theme-color" content="#ffffff">
    
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
  <title>USGS Earthquakes :: By HauHet plc.</title>

  <!-- Leaflet CSS -->
  <link rel="stylesheet" href="static/css/leaflet.css" crossorigin="" />

  <!-- Our CSS -->
  <link rel="stylesheet" type="text/css" href="static/css/style.css">
  
  <script src="static/copyright.js"></script>
  

<script type="application/ld+json">
	{
	  "@context": "https://schema.org",
	  "@graph": [
		{
		  "@type": "Organization",
		  "name": "HauHet plc.",
		  "sameAs": [
			"https://github.com/HauHetCo",
			"https://www.facebook.com/HauHet.Co"
		  ],
		  "url": "https://hauhet.co/",
		  "logo": {
			"@type": "ImageObject",
			"url": "https://hauhet.co/HauHetCo.png",
			"caption": "HauHet plc"
		  },
			"description": "We are HauHet
AI Energy Sector
Advanced Distribution Management System"
		}
	  ]
	}
</script>

</head>

<body>

  <!-- The div that holds our map -->
  <div id="map"></div>


  <!-- Leaflet JS -->
  <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
    integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
    crossorigin=""></script>
  <!-- D3 JavaScript -->
  <script src="https://d3js.org/d3.v5.min.js"></script>
  <!-- Our JavaScript -->
  <script type="text/javascript" src="static/js/logic.js"></script>
</body>

</html>
