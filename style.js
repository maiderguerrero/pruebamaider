/*General */
@font-face {
	font-family: 'handicraft';
	src: url(fonts/OzHandicraftBT-Roman.ttf) format("truetype"),
		 url('fonts/OzHandicraftBT-Roman.woff2') format('woff2'),
         url('fonts/OzHandicraftBT-Roman.woff') format('woff');
}

body {
    background: #b6ecff1f;
}

.body_clase .content-wrapper {
	padding-top: 130px;
	padding-bottom: 0px;
}

.body_clase.edit .content-wrapper {
	padding-top: 0;
	top: 0px;
}

.body_clase:not(.edit) .logo-publisher {
    display: inline-block;
    content: " ";
    background-image: url(images/logo_pruebamaider_educacion.png);
    width: 150px;
    height: 114px;
    margin-top: -22px;
    float: right;
    text-align: right;
    background-size: 130px;
    background-repeat: no-repeat;
    margin-right: 0px;
}

.html-book {
	font-size: 1.9rem;
}

.libro .footer .powered,
.libro .footer .legal-notes,
.libro .footer .about-us,
.libro .footer .contact-us,
.libro .footer .faq {
	display: none;
}

.body_clase #actividad {
	margin-bottom: 0px;
	-webkit-transform: none;
	-webkit-transform-style: flat;
}

.body_clase .slide-wrapper {
	text-align: justify;
}

#actividad .carousel-inner .item-container {
	background-image: none;
	max-width: 1200px;
	box-shadow: rgba(0,0,0,0.298039) 0 0px 0px;
	margin: 20px auto 30px;
	padding: 0px;
	padding-bottom: 90px;
	position: relative;
}

#swipeview-slider > div {
	background-color: #fff;
}

a {
    text-decoration: none;
    color: #757575;
}

a:hover, a:active, a:focus {
    color: #898989;
}

.zoom_flag_img {
    top: 20px;
}
/*HEADER*/

.body_clase #actividad .content .header .title img,
.body_clase #actividad .content .header .chapter {
	display: none;
}

.body_clase #actividad .content .header {
	border: none;
}

.body_clase #actividad .content .header .title h3 {
	display: none;
}

input, button, select, textarea {
	padding-left: 0;
	padding-bottom: 0px;
}

.pruebamaider-navbar h3 {
	width: 75%;
	margin: auto;
	margin-bottom: 15px;
	font-size: 2.0rem;
	font-weight: bold;
}

/**/

.texto_curso p:last-of-type {
    margin-bottom: 0px;
}

.body_clase #actividad .texto_curso {
	font-size: 1.8rem;
}

.body_clase #actividad .texto_curso li,
.body_clase #actividad .workspace ul li li {
	margin-bottom: 10px;
}

.body_clase #actividad .texto_curso li:last-of-type,
.body_clase #actividad .workspace ul li li:last-of-type {
	margin-bottom: 0px;
}

.texto_curso ul li:before,
.workspace ul li ul li:before,
.cke_contents ul li:before, .preview ul li:before,
.classify-item ul li:before,
#actividad .workspace.multiple-choice .js-item ul li:before,
#actividad .workspace.matching .box ul li:before,
#actividad .workspace.ordenar .js-rank-item ul li:before {
    background-color: #AC218F;
    border-radius: 0%;
    border: 0px;
}

#actividad .class_slide {
	padding: 40px 97px 0px;
}

#actividad .class_slide:last-of-type {
    padding-bottom: 100px;
}

#actividad .slide-concatenate .class_slide {
    padding-bottom: 20px;
}

#actividad .slide-concatenate:last-of-type .class_slide {
    padding-bottom: 100px;
}

#actividad .content .header .title {
	min-height: 0px;
}

.body_clase .slide_main input {
	color: #555;
	background-color: #fff;
	background-image: none;
	border: 1px solid #ccc;
	border-radius: 4px;
	-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
	box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
	-webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
	transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
}

.body_clase .slide_main input:focus,
.body_clase .slide_main .form-control:focus {
	border-color: #9664AB;
	outline-width: 0px;
	outline-style: none;
	box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(133, 200, 57, 0.6);
}

.body_clase .slide_main input[disabled],
.body_clase .slide_main input[readonly],
fieldset[disabled] .body_clase .slide_main input {
	cursor: not-allowed;
	background-color: #eee;
	opacity: 1;
}

.body_clase .slide_main input.respuesta_ok {
	border-color: #57e900;
	background: #D1F3BD;
}

.body_clase .slide_main input.respuesta_ko {
	border-color: #FF3626;
	background: #FFA49D;
}

.body_clase .slide_main input.solucion {
	border-color: #00BDFF;
	background: #B6ECFF;
}
/**/

/* CURSO */ /*INDICE LATERAL*/

.libro-left #btn-book-index,
#indice .unit-content {
    -webkit-border-radius: 0;
       -moz-border-radius: 0;
            border-radius: 0;
}



#indice .unit-content .header {
    border: 0px solid #9665AB;
    -webkit-border-radius: 0;
       -moz-border-radius: 0;
            border-radius: 0;
}

#book-index #indice .unit-content .actividades .item .title {
    font-weight: 400;
}

#indice .units ul li {
	-webkit-border-radius: 0px;
	   -moz-border-radius: 0px;
	        border-radius: 0px;
}

#indice .units ul li.hover:not(.disabled),
body:not(.isTablet) #indice .units ul li:hover:not(.disabled),
#indice .units ul li:hover:not(.disabled) {
    background: #EC968C;
}





#indice .units ul li.active:not(.disabled),
#indice .units ul li:focus:not(.disabled) {
    background: #E76048;
}



#book-index #indice .unit-content a,
#indice .units ul li a,
#indice .actividades a {
    -webkit-border-radius: 0px;
       -moz-border-radius: 0px;
            border-radius: 0px;
    color: #414141;
    background: transparent;
}

#book-index #indice .unit-content a:hover,
#indice .units ul li a:hover,
#indice .actividades a:hover,
#book-index #indice .unit-content a:active,
#indice .units ul li a:active,
#indice .actividades a:active,
#book-index #indice .unit-content a:focus,
#indice .units ul li a:focus,
#indice .actividades a:focus {
    color: #E7604D;,
}

#book-index #indice .unit-content .actividades .item {
    background: #e0cccc;
    margin: 0px -20px 2px -20px;
    padding-left: 25px;
    opacity: 1;
}

body:not(.isTablet) #book-index #indice .unit-content .actividades .item:hover,
#book-index #indice .unit-content .actividades .item.active,
#book-index #indice .unit-content .actividades .item.current {
	color: #fff;
    background: #EC968C;
}

body:not(.isTablet) #book-index #indice .unit-content .actividades .item:hover a,
#book-index #indice .unit-content .actividades .item.active a,
#book-index #indice .unit-content .actividades .item.current a {
	color: #fff;
}

body:not(.isTablet) #book-index #indice .unit-content .actividades .item:active,
#book-index #indice .unit-content .actividades .item.active,
#book-index #indice .unit-content .actividades .item.current {
    background: #EC968C;
}

#indice .unit-content .actividades .item.nivel_6 .title,
#indice .unit-content .actividades .item.nivel_6 .text {
	padding-left: 0;
	font-size: 1.8rem;
}

.zoom_flag_img {
    top: 20px;
}

#book-index #indice .unit-content .content .title-buttons .btn {
    -webkit-border-radius: 0;
       -moz-border-radius: 0;
            border-radius: 0;
}

/*INDICE LATERAL ROJO*/



#book-index .col-main {
	top: 0;
    left: 0;
    z-index: 2;
    background: #be1f24 !important;
    -webkit-box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    -moz-box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
}




body:not(.isTablet) #book-index #indice .units ul li:not(.disabled) a:hover, #book-index #indice .units ul li.active a {
    color: #fff;
    background: #be1f24;
}

#book-index #indice .units ul li a .title {
    margin: 0;
    font-size: 2rem;
}

#book-index #indice .unit-content .actividades .item .title {
    font-weight: 800;
    font-size: 1.7rem;
}

#book-index .col-indice {
    padding: 0;
    position: absolute;
    z-index: 1;
    background: #dc715f;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.libro-left ul li a.book-index.active {
    background-color: #BE1F24;
}





/**/

/* NAVBAR (Breadcums) */
#top-navigator {
	height: 55px;
	overflow: hidden;
	position: relative;
}

#top-navigator.show_left:before {
    background: linear-gradient(to right, #7aac39, transparent);
}

#top-navigator.show_right:after {
    background: linear-gradient(to left, #7aac39, transparent);
}

.body_clase .pruebamaider-navbar {
	position: fixed;
	top: 44px;
	width: 100%;
	left: 0;
	z-index: 100;
	background-color: #FFEDB3;
	padding-top: 11px;
}

.body_clase .modo-revision ~ .pruebamaider-navbar .navbar-content h2 #nombre-tema-wrapper {
	margin-left: -20px;
}

.body_clase .modo-revision ~ .pruebamaider-navbar {
	top: 90px;
}

.body_clase .modo-revision ~ .pruebamaider-navbar .dropdown {
	margin: -30px 0px 0px 40px;
}

.body_clase .modo-revision ~ .pruebamaider-navbar .dropdownTemas {
    top: 14px;
    width: 46%;
    height: 72px;
}

.body_clase .modo-revision #actividad .class_slide .revision-budget {
	padding-top: 13px;
}

body.is_app .pruebamaider-navbar {
	display: none;
}

body.is_app .pruebamaider-navbar.ocultar {
	top: -136px;
}

.body_clase .pruebamaider-navbar .dropdown button,
.body_clase .pruebamaider-navbar li {
	border-radius: 5px;
	border: none;
	background-color: transparent;
	color: black;
	vertical-align: middle;
	margin: 0px 5px;
	text-indent: 0px;
	line-height: 2.5rem;
	font-size: 1.9rem;
	cursor: pointer;
}

.body_clase .pruebamaider-navbar li {
	font-size: 1.5rem;
}

.body_clase .pruebamaider-navbar .dropdown button {
	font-weight: 600;
	width: auto;
	padding: 0;
	margin: 0;
	text-align: left;
	border: none;
	color: #898989;
    vertical-align: bottom;
}

.body_clase .pruebamaider-navbar .dropdown button:focus {
	outline: none;
}

.body_clase .pruebamaider-navbar .dropdown .caret {
	border-color: #898989 transparent transparent transparent;
	margin-left: 10px;
}

.body_clase .pruebamaider-navbar .navbar-content {
	max-width: 1160px;
    margin: auto;
}

.body_clase .pruebamaider-navbar .dropdownTemas {
	position: relative;
	display: inline-block;
    border-right: 10px solid #898989;
    padding-right: 40px;
    margin-left: 50px;
    width: 45%;
}

.body_clase .pruebamaider-navbar .dropdownTemas:focus,
.body_clase .pruebamaider-navbar .dropdownTemas button:focus {
	outline: none;
}

.body_clase .pruebamaider-navbar .dropdownTemas button {
	background-color: transparent;
	border: none;
}

.body_clase .pruebamaider-navbar .dropdownTemas .caret{
	border-color: #898989 transparent transparent transparent;
	margin-left: 10px;
}

.body_clase .pruebamaider-navbar .dropdownTemas .dropdown-menu {
	left: 0px;
    margin-top: -9px;
}

.body_clase .pruebamaider-navbar .navbar-content h2 {
	color: #898989;
	font-weight: 600;
	font-size: 2.5rem;
	margin-bottom: 0;
	padding-top: 20px;
	padding-left: 60px;
	position: relative;
	text-align: left;
	height: 80px;
    vertical-align: middle;
    display: table-cell;
}

.body_clase .pruebamaider-navbar .navbar-content h2 #nombre-tema-wrapper {
	line-height: 2.5rem;
	margin-left: -50px;
}



.body_clase .slider-indicators {
	padding: 10px 0px;
	display: inline-block;
	text-align: left;
	position: absolute;
	width: 5000px;
	bottom: 0px;
	left: 0px;
	z-index: 0;
}

.body_clase .slider-indicators li:first-child span,
.body_clase .dropdown li:first-child span.num {
	font-family: "Palatino Linotype", Times;
}

.body_clase .first-is-section .slider-indicators li:first-child span,
.body_clase .first-is-section .dropdown li:first-child span.num {
	font-family: 'FontAwesome' !important;
}

.dropdown-menu li span:first-child {
    display: inline-block;
    min-width: 20px;
    float: left;
}

.body_clase .slider-indicators li {
	width: 35px;
	height: 35px;
	margin: 0px 5px;
	text-align: center;
}

.body_clase .slider-indicators li.active,
.body_clase .pruebamaider-navbar li:hover {
	background-color: #FFEDB3;
}

.body_clase .pruebamaider-navbar .dropdown {
	width: 33%;
	display: inline-block;
    float: right;
    margin: 22px 0px 0px 40px;
}

.open > .dropdown-menu {
	display: block;
	max-height: 500px;
	overflow-y: auto;
	overflow-x: hidden;
}

.dropdown-menu > li > a {
	padding: 3px 20px 0px 20px;
}

.dropdownTemas .dropdown-menu > li > a {
	display: inline;
	padding-left: 5px;
}

.dropdownTemas .dropdown-menu > li > a:hover {
	background-color: transparent;
}

.dropdownTemas .dropdown-menu > li > span {
	padding-left: 10px;
}

.dropdown-menu .title {
	display: inline-block;
	width: 300px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.body_clase .pruebamaider-navbar .dropdown li {
	display: list-item;
	width: auto;
}

.body_clase .pruebamaider-navbar .dropdown li a {
	color: #777;
	font-size: 1.5rem;
	overflow: auto;
}

.dropdown-menu>li>a:hover, .dropdown-menu>li>a:focus {
    background-color: #FFEDB3;
}

/**/

/* Navigators */
.navigator {
	bottom: 0;
	left: 0;
	position: absolute;
	width: 100%;
	padding: 0px 97px;
}

.navigator .title {
	width: calc(100% - 20px);
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 1.6rem;
	line-height: 4.0rem;
	display: inline-block;
	vertical-align: top;
}

.main-navigator {
	padding: 15px 0px;
	width: 100%;
	border-top: 1px solid #e5e5e5;
}

.navigator .left, .navigator .right {
	width: 49%;
	display: inline-block;
	cursor: pointer;
}

.navigator .left {
	padding-left: 20px;
}

.navigator .right {
	text-align: right;
	padding-right: 20px;
}

.navigator .slider-control.left,
.navigator .slider-control.right {
    position: static;
    height: auto;
    width: 100%;
    background-color: transparent;
    border-radius: 0px;
    margin: 0px;
    opacity: 1;
    text-shadow: none;
    color: #999;
    font-size: 2.3rem;
}

.navigator .slider-control.left:before,
.navigator .slider-control.right:after {
	font-family: 'FontAwesome';
	position: absolute;
	margin-top: 9px;
	font-family: 'FontAwesome';
    position: absolute;
    margin-top: 10px;
    background: transparent;
    color: #999;
    border-radius: 0px;
    width: 48px;
    height: 48px;
    line-height: 30px;
    text-align: center;
    font-size: 2.4rem;
}

.navigator .slider-control.left:before {
	margin-left: -20px;
	content: "\f104";
}

.navigator .slider-control.right:after {
	margin-left: 20px;
	content: "\f105";
}

.navigator .slider-control span {
	position: static;
	margin: 0px;
    cursor: pointer;
}
/**/

/* CKEDITOR */
#actividad .content img {
	margin-top: 10px;
    border-bottom-right-radius: 0;
}

/*Evitar bordes en las lineas del matching*/
#actividad .workspace.matching .img-relaciones img {
	margin: 0;
	border: none;
	border-radius: 0;
}


#actividad .content .normal-img,  #actividad .content figure.normal-img img {
	border: none;
	border-radius: 0;
}

#actividad .content figure.normal-img {
	margin: 0;
	padding: 0;
}

#actividad .content .bck-img-align-right {
	float: right;
}

#actividad .content .bck-img-align-center {
	text-align: center;
}

#actividad .player.audio {
	background-image: url(audio_icon.png);
	background-size: 100%;
	background-position: 0;
	background-color: transparent;
}

.bck-title1 {
    text-align: left;
    color: #9665AB;
    font-size: 2.4rem;
    font-weight: bold;
    position: relative;
    border-left: 0px;
    padding: 10px 20px 0px 95px;
}

.bck-title2 {
    color: #9665AB;
    font-size: 2.1rem;
    font-weight: bold;
    border-bottom: 1px solid #9665AB;
	position: relative;
}

.bck-title3 {
    color: #FF8400;
    font-size: 2.4rem;
    font-weight: 600;
    display: inline-block;
	position: relative;
}

strong {
    color: #444;
    font-weight: bold;
}

.bck-enfasis {
    color: #00BDF2;
    font-weight: bold;
}

.bck-enfasis-naranja {
	color: #ED7102;
}

/*listas*/

/*LISTAS DESORDENADAS*/

.content ol li, .cke_contents ol li {
    padding-left: 32px;
}

#actividad .content ul.bck-ul li {
	list-style: none;
}

#actividad .content .texto_curso ul li:before,
#actividad .content .workspace ul li ul li:before,
#actividad .content .texto_curso .bck-ul li:before,
#actividad .content .workspace ul li .bck-ul li:before {
	content: "";
    position: absolute;
	height: 6px;
    width: 6px;
    background-color: #00AEEF;
    margin-top: 12px;
    margin-left: -15px;
	margin-right: 7px;
	margin-bottom: 2px;
	border-radius: 50%;
}

#actividad .content .texto_curso  ul.bck-ul-2 li,
#actividad .content .workspace ul li ul.bck-ul-2 li {
	list-style: none;
}

#actividad .content .texto_curso .bck-ul-2 li:before,
#actividad .content .workspace ul li .bck-ul-2 li:before {
	content: "- ";
	background: none;
    position: relative;
}

#actividad .content .texto_curso ul.bck-ul-3 li,
#actividad .content .workspace ul li ul.bck-ul-3 li {
	list-style: none;
	padding: 0;
	margin-left: 15px;
}

#actividad .content .texto_curso ul.bck-ul-3 li:before,
#actividad .content .workspace ul li ul.bck-ul-3 li:before {
	content: "ï¡";
	font-family: FontAwesome;
	display: inline-block;
	margin: 0;
	margin-left: -20px;
	background-color: transparent;
	color: #9665AB;
}

/**/

/*LISTAS ORDENADAS*/

/*LISTA ORDENADA 1*/

#actividad .content .cke_contents .bck-ol,
#actividad .content .texto_curso .bck-ol li,
#actividad .content .workspace ul li .bck-ol li {
    list-style-type: none;
    counter-increment: bck-li-counter 1;
    position: relative;
    padding-left: 0px;
}

#actividad .content .cke_contents .bck-ol li:before,
#actividad .content .texto_curso .bck-ol li:before,
#actividad .content .workspace ul li .bck-ol li:before {
	content: counter(bck-li-counter);
  	margin-top: 1px;
  	padding-right: 0px;
  	color: #A9A9A8;
  	font-size: 7.5rem;
  	font-weight: 100;
  	text-align: right;
}

/*LISTA ORDENADA 2*/

#actividad .content .texto_curso .bck-ol-2,
#actividad .content .workspace ul li .bck-ol-2 {
	list-style-type: none;
	counter-reset: bck-li-counter;
	padding-left: 10px;
	padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 5px;
}

#actividad .content .texto_curso .bck-ol-2 li,
#actividad .content .workspace ul li .bck-ol-2 li {
	counter-increment: bck-li-counter;
	position: relative;
	z-index: 0;
}

#actividad .content .texto_curso ol.bck-ol-2 li:before,
#actividad .content .workspace ul li ol.bck-ol-2 li:before {
	content: counter(bck-li-counter)'';
    font-weight: 600;
    text-align: left;
    margin-right: 5px;
    color: #1777c4;
    background: #FFDD00;
    padding: 2px 10px;
    border-radius: 100%;
    border: 4px solid #FFCB06;
    font-family: fantasy;
    position: relative;
}

/*LISTA ORDENADA 3*/

#actividad .content .texto_curso .bck-ol-3,
#actividad .content .workspace ul li .bck-ol-3 {
	list-style-type: none;
	counter-reset: bck-li-counter;
	padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 5px;
    padding-left: 0px;
}

#actividad .content .texto_curso .bck-ol-3 li,
#actividad .content .workspace ul li .bck-ol-3 li {
	counter-increment: bck-li-counter;
	position: relative;
	z-index: 0;
	padding-left: 35px;
}

#actividad .content .texto_curso ol.bck-ol-3 li:before,
#actividad .content .workspace ul li ol.bck-ol-3 li:before {
	content: counter(bck-li-counter, lower-alpha)')';
    font-weight: 500;
    text-align: left;
    color: #1777c4;
    position: relative;
}



/**/

/*tooltip*/
.bck-tooltip {
    text-decoration: none;
    color: #90C73D;
    font-weight: bold;
}


/*Cajas*/
.bck-box {
	max-width: 100%;
	margin-bottom: 20px;
}

.bck-box .bck-title {
    font-size: 2.0rem;
    margin-bottom: 0px;
}

.bck-box.center {
	display: block;
	text-align: center;
}

.bck-box.center .bck-content {
	position: relative;
}

.bck-box.left, img[style~="float:right"] {
	float: left;
	margin-right: 30px;
}

.bck-box.right, img[style~="float:left"] {
	float: right;
	margin-left: 30px;
}

.bck-box img {
	max-width: 100%;
}

.bck-box .bck-content {
	text-align: justify;
	padding: 10px;
}

.bck-box.simple {
    background-color: #f7f2df;
    text-align: left;
    margin-top: 20px;
}

.bck-box.simple:after {
    background: none;
}

.body_clase:not(.android) .bck-box.simple:before {
    transform: none;
    -ms-transform: skewY(0deg);
    -webkit-transform: skewY(0deg);
}

.bck-box.simple:before {
    background-color: #F2DBF2;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-top: 2px;
}

.bck-box.simple .bck-title {
    background-color: #FBA81C;
    color: #fff;
    font-weight: bold;
    display: inline-block;
    padding: 10px;
    border-bottom-right-radius: 20px;
    border-top-left-radius: 20px;
    width: 50%;
    padding-left: 30px;
}

.bck-box.simple-2 {
	background-color: #D8EEF9;
	border-radius: 10px;
	text-align: left;
}

.bck-box.simple-2 > .bck-content {
	padding: 10px 25px;
}

.bck-box.simple-3 {
	border: 3px solid #9665AB;
	border-radius: 8px;
    background: #CDBAD7;
    padding: 5px;
}

.bck-box.inicio {
    padding-top: 20px;
    background-color: #FFE593;
    margin-top: 30px;
}

.bck-box.blanca{
    background: #fff;
    padding: 0px 32px 20px 20px;
    border-top-right-radius: 50px;
}

.bck-box.blanca> .bck-title{
    color: #F8758D;
    font-weight: bold;
    margin-bottom: 15px;
    text-align: left;
    font-size: 19px;
}

.bck-box.cajamarron{
    background: #E7D894;
    padding: 20px;
    border-top-right-radius: 50px;
}

.bck-box.cajaproyecto{
    background: #ffdd00;
    padding: 20px;
}


.bck-box.saberes> .bck-title{
    font-weight: 600;
    color: #fff;
    background: #00BDF2;
    padding: 10px 20px 10px 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.bck-box.saberes> .bck-title:before {
    background-image: url(images/ciudadania/iconosaberes.png);
}

.bck-box.saberes> .bck-content{
  background-color: #ffd402;
   padding: 10px 20px 10px 20px;
   text-align: left;
}

.bck-box.sabias> .bck-title{
    font-weight: 600;
    color: #fff;
    background: #bc6fa5;
    padding: 10px 20px 10px 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.bck-box.sabias> .bck-content{
  background-color: #efde94;
   padding: 10px 20px 10px 20px;
   text-align: left;
}

.bck-box.desequilibrio> .bck-title{
    font-weight: 600;
    color: #fff;
    background: #EF0078;
    padding: 10px 20px 10px 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.bck-box.desequilibrio> .bck-title:before {
    background-image: url(images/ciudadania/icnoodesequilibrio.png);
}

.bck-box.desequilibrio> .bck-content{
   background-color: #ffd402;
   padding: 10px 20px 10px 20px;
   text-align: left;
}


.bck-box.tic> .bck-title{
    font-weight: 600;
    color: #fff;
    background: #995195;
    padding: 10px 20px 10px 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.bck-box.tic> .bck-title:before {
    background-image: url(images/ciudadania/iconotic.png);
}

.bck-box.tic> .bck-content{
    background-color: #ffd402;
   padding: 10px 20px 10px 20px;
     text-align: left;
}


.bck-box.valores> .bck-title{
    font-weight: 600;
    color: #fff;
    background: #a1550c;
    padding: 10px 20px 10px 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.bck-box.valores> .bck-title:before {
    background-image: url(images/ciudadania/iconovaloreshumanospruebamaider.png);
}

.bck-box.valores> .bck-content{
  background-color: #ffd402;
   padding: 10px 20px 10px 20px;
    text-align: left;
}

.bck-box.indagacion> .bck-title{
    font-weight: 600;
    color: #fff;
    background: #F8821E;
    padding: 10px 20px 10px 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.bck-box.indagacion> .bck-content{
  background-color: #ffd402;
   padding: 10px 20px 10px 20px;
    text-align: left;
}

.bck-box.cajaevaluacion> .bck-title{
    color: #fff;
    background: #000;
    font-size: 1.4rem;
    max-width: 95%;
    padding: 5px;
    border-top-right-radius: 15px;
}

.bck-box.cajaevaluacion> .bck-content{
    background: #fdaf18;
    border-bottom-right-radius: 30px;
}

.bck-box.cajaevaluaciondos> .bck-title{
    color: #fff;
    background: #000;
    font-size: 1.4rem;
    max-width: 95%;
    padding: 5px;
    border-top-right-radius: 15px;
}

.bck-box.cajaevaluaciondos> .bck-content{
    background: #e0cde1;
    border-bottom-right-radius: 30px;
}

.bck-box.cajaevaluaciontres> .bck-title{
    color: #fff;
    background: #000;
    font-size: 1.4rem;
    max-width: 95%;
    padding: 5px;
    border-top-right-radius: 15px;
}

.bck-box.cajaevaluaciontres> .bck-content{
    background: #f6989e;
    border-bottom-right-radius: 30px;
}

.bck-box.inter> .bck-title {
    font-weight: 600;
    color: #fff;
    background: #00A88E;
    padding: 10px 20px 10px 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.bck-box.inter> .bck-title:before {
    background-image: url(images/ciudadania/iconointer.png);
}

.bck-box.inter> .bck-content {
    background-color: #ffd402;
    padding: 10px 20px 10px 20px;
    text-align: left;
}

.bck-box.frases> .bck-title {
    font-weight: 600;
    color: #fff;
    background: #22bcad;
    padding: 10px 20px 10px 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.bck-box.frases> .bck-content {
    background-color: #ffd402;
    padding: 10px 20px 10px 20px;
    text-align: left;
}

.bck-box.diver> .bck-title {
    font-weight: 600;
    color: #fff;
    background: #F25947;
    padding: 10px 20px 10px 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.bck-box.diver> .bck-title:before {
    background-image: url(images/ciudadania/iconodiver.png);
}

.bck-box.diver> .bck-content {
    background-color: #ffd402;
    padding: 10px 20px 10px 20px;
    text-align: left;
}


.bck-box.estrategia> .bck-title {
    font-weight: 600;
    color: #fff;
    background: #f58221;
    padding: 10px 20px 10px 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.bck-box.estrategia> .bck-title:before {
    background-image: url(images/ciudadania/iconoestrategiarpruebamaider.png);
}

.bck-box.estrategia> .bck-content {
    background-color: #ffd402;
    padding: 10px 20px 10px 20px;
    text-align: left;
}


.bck-box.buenvivir> .bck-title {
    font-weight: 600;
    color: #fff;
    background: #6f85c1;
    padding: 10px 20px 10px 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.bck-box.buenvivir> .bck-content {
    background-color: #ffd402;
    padding: 10px 20px 10px 20px;
    text-align: left;
}

.bck-box.buenvivir> .bck-title:before {
    background-image: url(images/ciudadania/iconobuenvivirpruebamaider.png);
}


.bck-box.glosario> .bck-title {
    font-weight: 600;
    color: #fff;
    background: #a3bd31;
    padding: 10px 20px 10px 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.bck-box.glosario> .bck-content {
    background-color: #efde94;
    padding: 10px 20px 10px 20px;
    text-align: left;
}



.bck-box.laboratorio> .bck-title {
    font-weight: 600;
    color: #fff;
    background: #b49954;
    padding: 10px 20px 10px 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.bck-box.laboratorio> .bck-content {
    background-color: #f5eeca;
    padding: 10px 20px 10px 20px;
    text-align: left;
}


.bck-box.ejercicioresuelto> .bck-title {
    font-weight: 600;
    color: #fff;
    background: #bf70a5;
    padding: 10px 20px 10px 20px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}

.bck-box.ejercicioresuelto> .bck-content {
    background-color: #f5eeca;
    padding: 10px 20px 10px 20px;
    text-align: left;
}

.bck-box.seguridad> .bck-title {
    font-weight: 600;
    color: #fff;
    background: #f7df00;
    padding: 10px 20px 10px 80px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
    width: 50%;
    text-align: left;
}

.bck-box.seguridad> .bck-content {
    background-color: #f5eeca;
    padding: 10px 20px 10px 20px;
    text-align: left;
}


.bck-title:before {
    content: " ";
    position: absolute;
    left: -14px;
    z-index: 100;
    padding: 30px;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
}



/**/

/*ENLACES*/

/**TÃ­tulos**/

.titulobase{
    font-family: 'Averia Serif Libre', Georgia, serif;
}

.titulotema{
	font-family: handicraft;
    font-weight: 600;
    text-align: center;
    background: #001721;
    color: #D3A468;
    padding-top: 40px;
    padding-bottom: 30px;
    border-left: 15px solid #CC4E43;
}

.azul {
	font-family: handicraft;
    background: #00BDF2;
    font-size: 34px;
    color: #fff;
    font-weight: normal;
    padding: 40px 15px 20px 15px;
    margin-bottom: 35px;
    text-align: left;
}

.azuldos{
	font-family: handicraft;
    color: #00BDF2;
    font-size: 3rem;
}

.azuldos:before {
    content: "";
    background: #00BDF2;
    padding: 0px 19px;
    margin-right: 10px;
    border-radius: 100%;
}

.azulquimica {
	font-family: handicraft;
    color: #51ace2;
    font-weight: bold;
    margin-top: 50px;
    margin-bottom: 25px;
}

.evaluacion {
	font-family: handicraft;
    text-align: center;
    font-size: 4.8rem;
    font-weight: 500;
    color: #F67020;
    background-size: 900px;
    padding: 20px 0px 20px 20px;
    margin-top: -30px;
    background-image: url(images/ciudadania/img_fondoEva1.jpg) !important;
    background-blend-mode: overlay;
}

.proyecto{
	font-family: handicraft;
    text-align: center;
    font-size: 4.8rem;
    font-weight: 500;
    color:#8B4513;
    padding: 20px 0px 20px 20px;
}

.proyectodos{
	font-family: handicraft;
    color: #8B4513;
    font-size: 2.8rem;
    font-weight: 500;
}


/**2**/

.titulo-2 {
	position: relative;
	border-bottom-style: solid;
	border-width: 1px;
	font-weight: bold;
	color: black;
	line-height: 4.0rem;
	padding-left: 40px;
}


/**ImÃ¡genes-Enlaces**/

.presentation-img, .presentation-img .bck-content, .presentation-img p, #actividad .presentation-img img,
.presentation-video, .presentation-video .bck-content, .presentation-video p, #actividad .presentation-video img,
.presentation-video-2, .presentation-video-2 .bck-content, .presentation-video-2 p, #actividad .presentation-video-2 img,
.slider-img, .slider-img .bck-content, .slider-img p, #actividad .slider-img img,
.trabajar-img, .trabajar-img .bck-content, .trabajar-img p, #actividad .trabajar-img img,
.escuchar-box, .escuchar-box .bck-content, .escuchar-box p, #actividad .escuchar-box img,
.actividad-scorm-box, .actividad-scorm-box .bck-content, .actividad-scorm-box p, #actividad .actividad-scorm-box img {
	display: inline-block;
	padding: 0;
	margin: 0;
}

.presentation-img, .presentation-video, .presentation-video-2, .slider-img, .trabajar-img, .escuchar-box, .actividad-scorm-box {
	position: relative;
	margin-top: 20px;
}

.presentation-img .bck-content:before, .presentation-video .bck-content:before, .presentation-video-2 .bck-content:before,
.slider-img .bck-content:before, .trabajar-img .bck-content:before, .escuchar-box .bck-content:before, .actividad-scorm-box .bck-content:before {
	content: "";
	background-color: purple;
	border-top-left-radius: 100%;
	position: absolute;
	bottom: 0;
	right: 0;
	height: 50px;
	width: 50px;
}

.presentation-img .bck-content:after, .presentation-video .bck-content:after, .presentation-video-2 .bck-content:after,
.slider-img .bck-content:after, .trabajar-img .bck-content:after, .escuchar-box .bck-content:after, .actividad-scorm-box .bck-content:after {
	content: "";
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	position: absolute;
	bottom: 5px;
	right: 5px;
	height: 30px;
	width: 30px;
}



/**/

/**Iconos**/

.item-container .icon:before {
	content: "";
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	display: inline-block;
	vertical-align: middle;
	height: 25px;
	width: 25px;
}

.item-container .icon-clase:before {
	background-image: url(icon_clase.png);
}

.item-container .icon-clase-rosa:before {
	background-image: url(icon_clase_rosa.png);
}

.item-container .icon-conversation:before {
	background-image: url(icon_conversation.png);
}

.item-container .icon-conversation-verde:before {
	background-image: url(icon_conversacion_verde.png);
}

.item-container .icon-conversation-azul:before {
	background-image: url(icon_conversacion_azul.png);
}

.item-container .icon-conversation-rosa:before {
	background-image: url(icon_conversacion_rosa.png);
}

.item-container .icon-tool:before {
	background-image: url(icon_herramienta.png);
}

.item-container .icon-tool-verde:before {
	background-image: url(icon_herramienta_verde.png);
}

.item-container .icon-tool-azul:before {
	background-image: url(icon_herramienta_azul.png);
}

.item-container .icon-tool-rosa:before {
	background-image: url(icon_herramienta_rosa.png);
}

.item-container .icon-llave:before {
	background-image: url(icon_llave.png);
}

.item-container .icon-raton:before {
	background-image: url(icon_raton.png);
}

.item-container .icon-museo:before {
	background-image: url(icon_museo.png);
}

.item-container .icon-talento:before {
	background-image: url(icon_talento.png);
}

.item-container .icon-talento-2:before {
	background-image: url(icon_talento-2.png);
}

.item-container .icon-talento-verde:before {
	background-image: url(icon_talento_verde.png);
}

/**Iconos con nÃºmero**/
.item-container .icono {
	font-size: 2rem;
	color: #fff;
	background-color: #E30045;
	border-radius: 20px;
	border-bottom-right-radius: 0;
	padding: 2px 5px 2px 10px;
	margin-right: 5px;
}

.item-container .icono:after {
	content: "";
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	display: inline-block;
	vertical-align: middle;
	height: 25px;
	width: 25px;
	margin-left: 4px;
	margin-bottom: 4px;
}

.item-container .icono.ablink:after {
	background-image: url(icon_ablink.png);
}

.item-container .icono.ascorm:after {
	background-image: url(icon_ascorm.png);
}

/**/

/**TABLA**/

.bck-table {
	border: 0;
}

.bck-table td {
	padding: 10px;
	border-color: #009385;
}

table td.bck-td {
	background-color: #a0c8bf;
    color: #211915;
    font-weight: 600;
}

table td.bck-td-dos {
	background-color: #d3e6e2;
    color: #211915;
    font-weight: 600;
}

table td.bck-td-tres {
	background-color: #a966aa;
    color: #fff;
    font-weight: 600;
}

/**/

.textarea-container {
    width: 100%;
}

#actividad .workspace.multiple-choice .opcion {
    background-color: white;
}

.cke_reset {
    background: white;
}

 .btn-primary.disabled, .btn-primary.disabled:focus {
    background-color: #FFEDB3;
    color: grey;
    font-size: 1.6rem;
    border-radius: 0px;
}

.btn-primary{
    background-color: #85c939;
}


#indice .unit-content .actividades .item .title {
    font-weight: 600;
}

/**/

/* Seccion Actividades */
#actividad .carousel-inner .actividades .item-container {
	background-color: #FFF;
	position: relative;
	z-index: 0;
}

#actividad .carousel-inner .actividades .item-container:before {
	content: '';
	position: absolute;
	display: inline-block;
	border-top: 85px solid #F5821F;
	border-left: 77px solid #F5821F;
	border-right: 77px solid #F5821F;
	top: 0;
	left: 0;
	right: 0;
	bottom:0 ;
	background-color: transparent;
	z-index: -1;

}

.popover-title {
    margin: 0;
    background-color: #a3bd31;
    border-bottom: 1px solid #a3bd31;
    border-radius: 5px 5px 0 0;
    font-weight: 600;
    color: #fff;
    background: #a3bd31;
    padding: 10px 20px 10px 60px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}


.popover-content {
    padding: 9px 14px;
    background-color: #ffd402;
    padding: 10px 20px 10px 20px;
    text-align: left;
}

.popover-title:before {
    content: " ";
    position: absolute;
    left: -20px;
    margin-top: -10px;
    z-index: 100;
    padding: 30px;
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    background-image: url(images/ciudadania/iconoglosariociudadania.png) !important;
}

.modo_revision .popover-title:before {
	display: none;
}

.modal-open .popover-title {
  padding: 8px 14px;
  margin: 0;
  font-size: 14px;
  color: #000000;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ebebeb;
  border-radius: 5px 5px 0 0;
}

.modal-open .popover-content {
   background-color: transparent;
}

.modal-open .popover-title:before {
	display: none;
}


/* CKEDITOR */
.actividades .bck-title1 {
	color: #F5821F;
	position: relative;
	font-weight: bold;
	font-size: 2.8rem;
}

.actividades .bck-title1:before {
	background-color: transparent;
}

/**/

/* Seccion primera */
#actividad .carousel-inner .primera {
	background: linear-gradient(to bottom right, #d0cae6, #6e6097);
}

#actividad .carousel-inner .primera .item-container {
	background-color: transparent !important;
}

#actividad .carousel-inner .primera .slider-control .title,
#actividad .carousel-inner .primera .slider-control:after,
#actividad .carousel-inner .primera .slider-control:before {
	color: white;
}
/**/

/* Seccion segunda */
#actividad .carousel-inner .segunda {
	background-color: #9665AB;
}

#actividad .carousel-inner .segunda .item-container {
	background-color: transparent !important;
}

#actividad .carousel-inner .segunda .layout {
	background-color: #e5b7e4;
	border-radius: 10px;
	padding: 20px;
}

#actividad .carousel-inner .segunda .slider-control .title,
#actividad .carousel-inner .segunda .slider-control:after,
#actividad .carousel-inner .segunda .slider-control:before {
	color: white;
}
/**/

/**iframe**/

#iframe_div.scorm {
    width: 100% ! important;
    height: 100% ! important;
    top: 0px ! important;
    left: 0px ! important;
    background-color: #CCCCCC;
}

#iframe_div.scorm iframe#class_iframe {
    width: 100% ! important;
    height: 100% ! important;
}

#iframe_div.scorm .btn-close-iframe {
	right: 0px;
	top: 15px;
	margin-top: 20px;
}

#iframe_div.scorm .btn-close-iframe span {
	display: none;
}

#iframe_div.scorm .btn-close-iframe a {
	padding: 16px;
	background-color: #E9E9E9;
	border-bottom-left-radius: 10px;
	border-bottom-right-radius: 5px;
	box-shadow: 0px 1px 5px #aaa;
}

#iframe_div.scorm .btn-close-iframe a .fa {
	font-size: 2rem;
}

/**/

/**Dropdown**/

.bck-dropdown {
	border-top-right-radius: 20px;
}

.pruebamaider-dropdown .bck-dropdown-icon, .pruebamaider-dropdown-2 .bck-dropdown-icon {
	color: white;
}

.pruebamaider-dropdown .bck-dropdown-icon > .fa, .pruebamaider-dropdown-2 .bck-dropdown-icon > .fa {
	border: 3px solid white;
}

.pruebamaider-dropdown .bck-dropdown-titulo, .pruebamaider-dropdown-2 .bck-dropdown-titulo{
	color: white;
}

/*Desplegable 1*/
.bck-dropdown.pruebamaider-dropdown {
	background-color: #FBA81C;
}

.pruebamaider-dropdown .bck-dropdown-icon {
	background-color: #FBA81C;
}

.pruebamaider-dropdown .bck-dropdown-content {
	background-color: #F2E7D1;
}

/**/

/*Desplegable 2*/
.bck-dropdown.pruebamaider-dropdown-2 {
	background-color: #9665AB;
}

.pruebamaider-dropdown-2 .bck-dropdown-icon {
	background-color: #9665AB;
}

.pruebamaider-dropdown-2 .bck-dropdown-content {
	background-color: #e5b7e4;
}

.edit .pruebamaider-dropdown-2 .bck-dropdown-content {
	color: white;
}
/**/
/****/

@media screen and (min-width: 768px) and (max-width: 1024px) {
	.body_clase .pruebamaider-navbar .dropdownTemas {
	    width: 435px;
	}

	.body_clase .pruebamaider-navbar .navbar-content h2 {
		font-size: 2.2rem;
	}

	.body_clase .pruebamaider-navbar .dropdown {
		float: none;
	    width: 330px;
	    display: inline-block;
	}

	.body_clase .pruebamaider-navbar .dropdown button {
		padding-bottom: 25px;
	}

	.body_clase:not(.edit) .logo-publisher {
		display: none;
	}
}


@media screen and (max-width: 768px) {
	.body_clase:not(.edit) .logo-publisher {
	    display: none;
	}

	.body_clase .pruebamaider-navbar .navbar-content h2 {
	    margin-top: 0px;
	    font-size: 2.0rem;
	    margin-bottom: 0;
	    padding-left: 45px;
	    height: 0px;
	    padding-top: 0px;
	}

	#actividad .carousel-inner .class_slide {
        padding: 40px 20px 0px;
    }

	.navigator {
        padding: 0px 20px;
    }

	#actividad .carousel-inner .actividades .item-container:before,
	#actividad .carousel-inner .emprender .item-container:before {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-top-width: 85px;
		border-left-width: 20px;
		border-right-width: 20px;
	}

	#actividad .carousel-inner .taller .item-container:before {
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-top-width: 60px;
		border-left-width: 20px;
		border-right-width: 20px;
		bottom:0 ;
	}
	.open > .dropdown-menu {
	    max-width: 300px;
	}

	.body_clase .pruebamaider-navbar .dropdown {
	    max-width: 350px;
	    margin: 0px 15px 0px 15px;
	}

	.body_clase .pruebamaider-navbar .dropdownTemas {
	    border-right: 0px;
	    padding: 0px;
	    margin: 0px 15px 0px 30px;
	    max-width: 350px;
	}

	.body_clase .pruebamaider-navbar .dropdown button {
	    font-size: 17px;
	 }

	 .bck-box.blanca {
    	padding: 0px 5px;
	}

	.titulotema {
	    padding: 15px;
	    text-align: left;
	}

	.azul {
	    font-size: 2.6rem;
	    padding: 10px 15px;
	    margin: 5% 0%;
	}

	.evaluacion {
	    font-size: 4.0rem;
	    background-size: cover;
	    padding: 20px;
	}

	.proyecto {
    	font-size: 4.0rem;
	}

	.azulquimica {
		font-size: 2.6rem;
	}

	.bck-box.center {
	    margin-top: 5%;
	}

	.bck-box.cajamarron {
	    padding: 0px;
	}

	.content ol li, .cke_contents ol li {
	    padding-left: 14px;
	}

	.body_clase:not(.edit) .logo-publisher {
    	display: none;
	}

	.body_clase .pruebamaider-navbar .navbar-content h2 {
	    margin-top: 0px;
	    font-size: 2.0rem;
	    margin-bottom: 0;
	    padding-left: 45px;
	    height: 0px;
	    padding-top: 0px;
	}

	.open > .dropdown-menu {
	    max-width: 300px;
	}

	.body_clase .pruebamaider-navbar .dropdown {
	    max-width: 350px;
	    margin: 0px 15px 0px 15px;
	}

	.body_clase .pruebamaider-navbar .dropdownTemas {
	    border-right: 0px;
	    padding: 0px;
	    margin: 0px 15px 0px 30px;
	    max-width: 350px;
	}

	.pruebamaider-navbar .dropdown button {
	    font-size: 17px;
	 }

	.bck-box.estrategia>.bck-title:before,
	.bck-box.diver> .bck-title:before,
	 .bck-box.saberes>.bck-title:before,
	 .bck-box.desequilibrio>.bck-title:before,
	.bck-box.tic>.bck-title:before,
	.bck-box.inter>.bck-title:before,
	.bck-box.estrategia>.bck-title:before,
	 .bck-box.valores>.bck-title:before,
	 .bck-box.buenvivir>.bck-title:before,
	.bck-box.glosario>.bck-title:before,
	 .bck-box.laboratorio>.bck-title:before,
	.bck-box.indagacion>.bck-title:before,
	.bck-box.sabias>.bck-title:before,
	.bck-box.ejercicioresuelto>.bck-title:before,
	.bck-box.seguridad>.bck-title:before,
	.bck-box.frases>.bck-title:before {
	    padding: 27px;
	    left: 0px;
	}

}

@media screen and (max-width: 450px) {

	.body_clase .pruebamaider-navbar .navbar-content {
		display: none;
	}

	.content_type_clase_pruebamaider .pruebamaider-navbar .dropdown {
		display: none;
	}

	.body_clase #actividad .carousel-inner .item-container {
		margin-top: 0px;
	}

	.body_clase .content-wrapper {
	    padding-top: 88px;
	    padding-bottom: 0px;
	}

	.puzzle-wrapper {
	    width: 100%;
	}

	.slide.crosswords-puzzle .enunciados {
	    width: 100%;
	    margin-top: 10px;
	}

	#actividad .workspace.clasificar .clasificar_lista .classify-item {
	    line-height: 13px !important;
	    position: relative !important;
	    height: auto  !important;
	    padding: 15px 5px 0px  !important;
	}

	a#boton_notes {
	    display: none;
	}

	a#boton_borrador {
	    display: none;
	}

	#actividad .carousel-inner .class_slide {
	    padding: 11px 20px 0px;
	}

	.body_clase:not(.edit) .logo-publisher {
	    display: none;
	}
}
