@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&family=Ubuntu:wght@300&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Gantari:wght@300&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Gantari:wght@300&display=swap');

html, body, div, span, applet, object, iframe, 
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: 'Raleway', sans-serif;
    font-family: 'Ubuntu', sans-serif;
    font-family: 'Gantari', sans-serif;
}
*{
    text-decoration: none;
}
body{
    background-color: #eee;
}
/*Grid mantendo a estrura toda em coluna(Header Main Footer)*/
#container{
    display:grid;
    grid-template-columns: 100%;
    grid-template-areas: "header" "main" "footer";
}
/*Cabeçalho inicio*/
header{
    grid-area: header;
    position:static;
    z-index: 90;
    top: 0;
    background: #264653;
    box-sizing:border-box;
    box-shadow: 1px 3px 15px #264653;
    height: 80px;

    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-around;
    align-items:center;
    color: #eee;
    gap: 60px;
}
/*Inicio do logo*/
header .box-logo{
    width: 225px;
}
header .logo{
    color: #e9c46a;
    font-size: 22px;
    font-weight: bolder;
}
header .logo:hover{
    font-size: 27px;
    transition:.2s linear;
}
/*Término das modificações do logo*/

/*Barra de navegação*/
.navbar{
    display: flex;
}
/*Dropdown menu*/
.dropdown{
    display: none;
    width: 100%;
    position: absolute;
    top: 3%;
    left: 0px;
    background: #264653;
    box-sizing:border-box;
    box-shadow: 1px 3px 15px #264653;
}
.menu li{
    width: 100%;
    position: relative;
    float: left;
    border-left: 1px solid #010101;
    list-style: none;
}
.menu li:first-child{border: none;}
.menu a{
    color: #264653;
    text-decoration: none;
    padding: 5px 13px;
    display: block;
}
.menu a:hover{
    background: #264653;
    color: #fff;
}
.menu .dropdown a{ color:#eee}
.menu .dropdown li{ border: none}
.menu li:hover ul{ display: block}
.menu li ul li:hover ul{display: block;}
/*Término dropdown menu*/
header .navbar a{
    font-size: 18px;
    border-radius:40px;
    padding: 8px 20px;
    color:#eee;
}
.menu .dropdown li ul{
    position: relative;
    top: 0;
    left: 10px;
    background: #fff;
    display: none;
}
header .navbar a:hover{
    color: #fff;
    background-color: #e9c46a;
}
header .fa-bars, .fa-search, .fa-shopping-cart, .fa-user{
    cursor: pointer;
    margin-left: 5px;
    height: 35px;
    line-height: 35px;
    width: 40px;
    text-align: center;
    font-size: 22px;
    color: #eee;
    border-radius:50%;
}
header .icons .fa-bars:hover, .fa-search:hover, .fa-shopping-cart:hover, .fa-user:hover{
    color: #eee;
    background: #e9c46a;
    transform: rotate(360deg);
    transition: .3s linear;
}
/*Menu oculto para se tornar responsivo*/
header .icons #menu-bars{
    display: none;
}
/*Barra de pesquisa oculta*/
.search-form{
    display: flex;
    position: absolute;
    top: -500%; right:2rem;
    background: rgb(255, 255, 255);
    box-sizing:border-box;
    box-shadow: 1px 10px 10px rgb(133, 132, 132);
    width: 385px;
    height: 52px;
    transition: .3s linear;
}
.search-form.active{
    display:flex;
    align-items: center;
    top:13%; right:2rem;
}
.search-form input{
    height: 100%;
    width: 95%;
    padding:0 20px;
    font-size:  18px;
    color: #000;
    text-transform: none;
    border: none;
}
label{
    font-size: 25px;
    margin-right: 10px;
    cursor: pointer;
}
/*Término barra de pesquisa*/

/*Inicio carrinho de compra*/
.shopping-cart{
    display:flex;
    position: absolute;
    top: -500%; right: 2rem;
    background: #fff;
    border-radius: 6px;
    box-shadow: 1px 10px 10px rgb(204, 204, 204);
    min-width: 325px;
    padding: 10px;
    transition: .3s linear;
}
.shopping-cart.active{
    display: inline-block;
    top:12%; right:2rem;
    transition: .16s linear;
}
.box-cart-buy{
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 15px;
    position: relative;
}
.header-cart-buy{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #264653;
    width: 100%;
    height: 35px;
    font-size: 22px;
    color: #e9c46a;
    border-radius: 5px;
}
.btn-cart-buy{
    margin-top: 1rem;
    display: inline-block;
    padding: 10px 24px;
    border-radius: 5px;
    background-color: #264653;
    color: #e9c46a;
    font-size: 18px;
    cursor: pointer;
    width: 85%;
    text-align: center;
}
.btn-cart-buy:hover{
    letter-spacing: 2px;
    transition: .2s linear;
}
/*Término carrinho de compra*/

/*Inicio do formulário de login*/
.login-form{
    position: absolute;
    top: -800%; right: 2rem;
    background-color: #264653;
    border-radius: 5px;
    box-shadow: 1px 10px 10px rgb(204, 204, 204);
    width: 350px;
    transition: .2s linear;
}
.login-form.active{
    display: inline-block;
    top:12%; right:2rem;
}
.login-form h3{
    margin-top: 10px;
    color: #e9c46a;
    font-size: 25px;
    text-align: center;
    margin-bottom: 15px;
    text-transform: uppercase;
}
.login-form .box-login{
    margin: 11px;
    border: solid 1px #e9c46a;
    padding: 13px 11px;
    font-size: 1rem;
    color: #264653;
    text-transform: none;
    width: 85%;
}
.remember{
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 5px 0;
    padding-left:7px; ;
}
.login-form label{
    font-size: 1;
    color: #e9c46a;
    cursor: pointer;
}
.btn-login-form{
    margin: 10px 7%;
    width: 50%;
    text-align: center;
    display: inline-block;
    padding: 10px 24px;
    border-radius: 5px;
    border: 0.2px solid #e9c46a;
    background-color: #264653;
    color: #e9c46a;
    font-size: 18px;
    cursor: pointer;
    width: 85%;
}
.btn-login-form:hover{
    letter-spacing: 1px;
    transition: .3s linear;
}
.login-form p{
    color: #e9c46a;
    padding: 10px;
    font-size:14px;
}
.login-form a{
    color: #f4a261;
}
.login-form a:hover{
    text-decoration: underline;
}
/*Término do formulário de login*/

/*Término da barra de navegação*/
/*Cabeçalho término*/

/* Inicio do corpo */
#container .main{
    grid-area: main;
    position: relative;
    height:100%;
    top:0; 
    left: 0; 
    right:0;
    background:#fff;
    display: flex;
    justify-content: center;
    box-sizing:border-box;
    box-shadow: 1px 2px 10px rgb(143, 143, 143,0.9);
    display: flex;
    flex-direction: column;
}
.main-container-slide{
    height: 70vh;
    display: flex;
    justify-content: center;
    padding-top: 35px;
}
/* Inicio do banner rotativo */
.slider{
    width: 400%;
    height: 500px;
    overflow: hidden;
    margin-top: -37px;
}
.slides{
    width: 500%;
    height: 500px;
    display: flex;
}
.slides input{
    display: none;
}
.slide{
    width: 20%;
    transition: 2s;
}
.nav-manual{
    position: absolute;
    width: 800px;
    margin-top: -40px;
    display: flex;
    justify-content:end;
    margin-left: 10%;
}
.manual-btn{
    border: 2px solid #e9c46a;
    padding: 6px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
    margin-top: 45px;
}
.manual-btn:not(last-child){
    margin-right: 25px;
}
.manual-btn:hover{
    background: #f4a261;
}
#radio1:checked ~ .first{
    margin-left: 0;
}
#radio2:checked ~ .first{
    margin-left: -20%;
}
#radio3:checked ~ .first{
    margin-left: -40%;
}
.nav-auto{
    position: absolute;
    display: flex;
    width: 800px;
    justify-content: end;
    margin-top: 505px;
}
.nav-auto div:not(last-child){
    margin-right: 25px;
}
#radio:checked ~ .nav-auto{
    background: #e9c46a;
}
#radio:checked ~ .nav-auto{
    background: #e9c46a;
}
.img-banner{
    width: 100%;
}
/* Término do banner rotativo */

/* Serviços diversos do corpo */
main .services{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.services .img-services-hotel{
    width: 380px;
    height: 380px;
    background-image: url("../image/blocoHotel-removebg-preview.png");
    background-repeat: no-repeat;
    background-size: contain;
}
.services .text-services-hotel{
    width: 380px;
    height: 380px;
    display: flex;
    flex-direction: column;
}
.text-services-hotel i{
    color: #fff;
    font-size: 70px;
    padding-left: 130px;
}
.text-services-hotel p{
    color: #fff;
    padding-left:62px;
    font-size: 25px;
    font-weight: 900;
}
.services .img-services-banhoTosa{
    width: 380px;
    height: 380px;
    background-image: url("../image/blocoBanhoeTosa-removebg-preview.png");
    background-repeat: no-repeat;
    background-size: contain;
}
.services .text-services-banhoTosa{
    width: 380px;
    height: 380px;
    display: flex;
    flex-direction: column;
}
.text-services-banhoTosa i{
    color: #fff;
    font-size: 70px;
    padding-left: 140px;
}
.text-services-banhoTosa p{
    color: #fff;
    padding-left:90px;
    font-size: 25px;
    font-weight: 900;
}
.services .img-services-veterinario{
    width: 380px;
    height: 380px;
    background-image: url("../image/blocoVeterinario-removebg-preview.png");
    background-repeat: no-repeat;
    background-size: contain;
}
.services .text-services-veterinario{
    width: 380px;
    height: 380px;
    display: flex;
    flex-direction: column;
}
.text-services-veterinario i{
    color: #fff;
    font-size: 70px;
    padding-left: 145px;
}
.text-services-veterinario p{
    color: #fff;
    padding-left:105px;
    font-size: 25px;
    font-weight: 900;
}
.services .img-services-petSitting{
    width: 380px;
    height: 380px;
    background-image: url("../image/blocoPetSitting-removebg-preview.png");
    background-repeat: no-repeat;
    background-size: contain;
}
.services .text-services-petSitting{
    width: 380px;
    height: 380px;
    display: flex;
    flex-direction: column;
}
.text-services-petSitting i{
    color: #fff;
    font-size: 70px;
    padding-left: 135px;
}
.text-services-petSitting p{
    color: #fff;
    padding-left:110px;
    font-size: 25px;
    font-weight: 900;
}
.services div:hover{
    -webkit-animation-name: AnimationService;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count:initial;
}
@keyframes AnimationService{
    0% {
        transform:translatey(0);
    }
    20% {
        transform:translateY(-5%);
    }
    40%{
        transform: translate(0) scale(1.03);
    }
}
/* término dos serviços diversos do corpo */
/* Cachorro corpo */
.dog-main{
    margin-left: 25%;
    width: 320px;
    height: 320px;
    background-image: url("../image/dogMain.png");
    background-size: contain;
}
/* Texto animado corpo */
.animation-rainbow-text{
    display: flex;
    flex-direction: row;
    justify-content: right;
    font-family: 'Gantari', sans-serif;
    padding-right: 80px;
    font-size: 40px;
    height: 37vh;
}
.wrap{
    display: flex;
    position: relative;
    top: 140px;
    height: 50px;
    font-weight: 800;
    background-color: #333;
    background-image: #333;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 7%;
}
.wrap p{
    margin: 0 10px;
}
.wrap::before{
    font-size: 50px;
    content: "";
}
.wrap::after{
    content: "";
    font-size: 50px;
}
.wrap::before, .wrap::after{
    -webkit-animation-name: display;
    -webkit-animation-duration: 3s;
    -webkit-animation-iteration-count: infinite;
}
.rainbow-words{
    margin: 0 10px;
    overflow: hidden;
}
.wrap span{
    display: block;
    height: 100%;
    padding-left: 2px;
    background-color: #06d6a0;
    background-image: linear-gradient(92deg, #06d6a0 14%, #118ab2 57%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation-name: spin;
    -webkit-animation-duration: 8s;
    -webkit-animation-iteration-count: infinite;
    font-weight:900;
}
@keyframes display{
    0%, 100% {
        opacity: 0;
    }
    50%{
        opacity: 2;
    }
}
@keyframes spin{
    0% {
        transform:translatey(0%);
    }
    20% {
        transform:translateY(10%); 
    }
    40% {
        transform: translateY(-90%);
    }
    60% {
        transform: translateY(-100%);
    }
    80% {
        transform: translateY(-200%);
    }
    100% {transform: translateY(-300%);
    }
}
/* Fim texto animado corpo */
/* Inicio da seção de outros serviços */
.section-others-services{
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    min-height: 700px;
    background-color: #264653;
}
.other-services-text{
    color: #eee;
    position:absolute;
    top: 1%;
    z-index: 55;
}
.other-services-text p{
    font-size: 20px;
    padding-bottom: 5px;
    color: #f4a261;
    text-align: center;
}
.other-services-text h2{
    font-weight: 900;
    font-size: 30px;
}
.others-services{
    color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
}
.dog-services-img{
    width: 356px;
    height: 520px;
    background-image: url("../image/dogServices.jpg");
    background-repeat: no-repeat;
    background-size: contain;
}
.dog-services-img ul, a{
    position: relative;
    text-decoration: none;
    list-style: none;
    color: #fff;
    font-size: 25px;
    padding-top: 35%;
}
.dog-services-img li{
    padding-top: 10px;
    font-weight: 700;
    margin-top: 20px;
}
.dog-services-img a:hover{
    text-decoration: underline;
    transition: all linear .2s;
}
.dog-services-img button{
    background-color: #CA28FC;
    border: none;
    color: #fff;
    border-radius: 10px;
    width: 150px;
    height: 30px;
    margin-top: 8%;
    cursor: pointer;
    font-size: 95%;
}
.dog-services-img button:hover{
    background-color: #9324b4;
    color: #fff;
}
.text-service{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.cat-services-img{
    width: 356px;
    height: 520px;
    background-image: url("../image/catServices.jpg");
    background-repeat: no-repeat;
    background-size: contain;
}
.cat-services-img ul, a{
    position: relative;
    text-decoration: none;
    list-style: none;
    color: #fff;
    font-size: 25px;
    padding-top: 35%;
}
.cat-services-img li{
    padding-top: 10px;
    font-weight: 700;
    margin-top: 20px;
}
.cat-services-img a:hover{
    text-decoration: underline;
    transition: all linear .2s;
}
.cat-services-img button{
    background-color: #f4a261;
    border: none;
    color: #fff;
    border-radius: 10px;
    width: 150px;
    height: 30px;
    margin-top: 8%;
    font-size: 95%;
    cursor: pointer;
}
.cat-services-img button:hover{
    background-color: #f38429;
    color: #fff;
}
.text-service{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.fish-services-img{
    width: 356px;
    height: 520px;
    background-image: url("../image/fishServices.jpg");
    background-repeat: no-repeat;
    background-size: contain;
}
.fish-services-img ul, a{
    position: relative;
    text-decoration: none;
    list-style: none;
    color: #fff;
    font-size: 25px;
    padding-top: 35%;
}
.fish-services-img li{
    padding-top: 10px;
    font-weight: 700;
    margin-top: 20px;
}
.fish-services-img a:hover{
    text-decoration: underline;
    transition: all linear .2s;
}
.fish-services-img button{
    background-color: #6fd30c;
    border: none;
    color: #fff;
    border-radius: 10px;
    width: 150px;
    height: 30px;
    margin-top: 8%;
    cursor: pointer;
    font-size: 95%;
}
.fish-services-img button:hover{
    background-color: #609927;
    color: #fff;
}
.text-service{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.bird-services-img{
    width: 356px;
    height: 520px;
    margin-left: 1%;
    background-image: url("../image/birdServices.jpg");
    background-repeat: no-repeat;
    background-size: contain;
}
.bird-services-img ul, a{
    position: relative;
    text-decoration: none;
    list-style: none;
    color: #fff;
    font-size: 25px;
    padding-top: 35%;
}
.bird-services-img li{
    padding-top: 10px;
    font-weight: 700;
    margin-top: 20px;
}
.bird-services-img a:hover{
    text-decoration: underline;
    transition: all linear .2s;
}
.bird-services-img button{
    background-color: #f57c35;
    border: none;
    color: #fff;
    border-radius: 10px;
    width: 150px;
    height: 30px;
    margin-top: 8%;
    cursor: pointer;
    font-size: 95%;
}
.bird-services-img button:hover{
    background-color: #df3c0a;
    color: #fff;
}
.text-service{
    display: flex;
    flex-direction: column;
    align-items: center;
}
/* Fim da seção de outros serviços*/
/* Wave decoration */
.wave{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    background-color: #333;
}
.wave svg{
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}
.wave .shape-fill{
    fill: #264653;
}
/* Término do corpo */

/* Inicio do rodapé */
footer{
    grid-area: footer;
    position: relative;
    top:0; 
    left: 0; 
    right:0;
    background: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

#container footer ul{list-style-type:none;}
.footer-content{
    display: flex;
    flex-direction: column;
    padding: 1%;
    width: 100%;
}
.info-footer{
    display: flex;
    flex-direction: row;
    padding: 1%;
    justify-content: space-around;
}
.info-footer h3{
    font-size: 2rem;
    font-weight: 900;
    color: #eee;
    padding-bottom: 1%;
    border-bottom: 0.5px solid #fff;
}
.sobre-nos{
    width: 33.33%;
    padding: 1%;
    color: #eee;
}
.link1{
    width: 33.33%;
    padding: 1%;
}
footer .link1 a{
    font-size: 100%;
}
.link1 a:hover{
    text-decoration: underline;
}
.atendimento{
    color: #fff;
    padding: 1%;
}
.promotions{
    display: flex;
    justify-content: center;
    border-top: 0.5px solid #fff;
    border-bottom: 0.5px solid #fff;
    width: 100%;
}
.form-promotions{
    padding: 3%;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1%;
    height: 3rem;
}
.form-promotions input{
    width: 35%;
    border: none;
    border-radius: 15px;
    height: 100%;
    box-shadow: 1px 1px 10px rgb(146, 145, 145);
    display: flex;
    text-align: center;
}
.form-promotions button{
    width: 10%;
    font-size: 1rem;
    border: none;
    border-radius: 15px;
    background-color: #df3c0a;
    color: #fff;
    box-shadow: 1px 1px 10px #c73306;
}
.form-promotions button:hover{
    background-color: #a52d08;
}
.social-btns{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 82%;
}
.ajsutes-social-btns{
    display: flex;
    gap: 20%;
    padding: 1%;
}
.ajsutes-social-btns i, button{
    font-size: 5rem;
    background-color: #333;
    border: none;
    cursor: pointer;
}
.fa-linkedin{
    color: #264653;
}
.fa-linkedin:hover{
    -webkit-animation-name: social-btns;
    -webkit-animation-duration: 2.4s;
    -webkit-animation-iteration-count: 0s;
}
.fa-twitter{
    color: #3b90ff;
}
.fa-twitter:hover{
    -webkit-animation-name: social-btns;
    -webkit-animation-duration: 2.4s;
    -webkit-animation-iteration-count: 0s;
}
.fa-facebook{
    color: #215497;
}
.fa-facebook:hover{
    -webkit-animation-name: social-btns;
    -webkit-animation-duration: 2.4s;
    -webkit-animation-iteration-count: 0s;
}
.fa-instagram{
    color: #e95950;
}
.fa-instagram:hover{
    -webkit-animation-name: social-btns;
    -webkit-animation-duration: 2.4s;
    -webkit-animation-iteration-count: 0s;
}
@keyframes social-btns {
    0% {
        transform:translatey(0%);
    }
    20% {
        transform:translateY(-10%) scale(1.08);
    }
}
/* Término do rodapé */
















/* media queries  */
@media (max-width:1450px){
    .img-banner{
        width: 1100px;
    }
    .nav-auto{
        display: none;
        position: absolute;
        display: flex;
        width: 800px;
        justify-content: end;
        margin-top: 380px;
        padding-right: 200px;
    }
    .nav-manual{
        position: absolute;
        width: 800px;
        margin-top: -40px;
        display: flex;
        justify-content: end;
        margin-top: -120px;
        padding-right: 200px;
    }
}
@media (min-width:992px) and (max-width:1368px){
    .section-others-services button{
        font-size: 45%;
    }
}
@media (max-width:1200px){
    main .img-banner{
        width: 991px;
    }
    .nav-auto div{
       display: none;
    }
    .manual-btn{
        display: none;
    } 
}
@media (max-width:991px){
    
    html{
        font-size: 55%;
    }
    html{
        font-size: 44%;
    }

    #container header{
        display: flex;
        padding: 1rem 2rem;
    }
    header .box-logo{
        width: 150px;
    }
    header .logo{
        color: var(--black);
        font-size: 20px;
        font-weight: bolder;   
    }
    header .fa-bars, .fa-search, .fa-shopping-cart, .fa-heart, .fa-user{
        cursor: pointer;
        margin-left: 1px;
        height: 31px;
        line-height: 31px;
        width: 31px;
        text-align: center;
        font-size: 16px;
        color: #000;
        border-radius:40%;
        background:#e6e6e6;
    }
    .search-form{
        width: 350px;
    } 
    #container footer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    main .img-banner{
        width: 660px;
        padding-left:55px;
    }
    .login-form{
        width: 325px;
    }
    .slider{
        width: 400%;
        height: 500px;
        border-radius: 6px;
        overflow: hidden;
    }
}
@media (max-width:1418px){
    .animation-rainbow-text{
        margin: 0 auto;
        position: relative;
    }
}
@media (max-width:1000px){
    .animation-rainbow-text{
        margin: 0 auto;
        position: relative;
        font-size: 160%;
    }
}
@media (max-width:1418px){
    
    header .icons #menu-bars{
        display: inline-block;
    }
    header .navbar{
        position: absolute;
        top: 9%; left: 0; right: 0;
        background: #264653;
        border-top: 0.16px solid rgba(0, 0, 0, .2);
        border-bottom: 0.16px solid rgba(0, 0, 0, .2);
        padding: 15px;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
    }
    header .navbar a{
        color: #010101;
    }
    header .navbar .dropdown{
        display: none;
    }

    header .navbar{
        display: flex;
        flex-direction: column;
    }
    header .navbar.active{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }
    header .navbar a{
        display:block;
        padding:1.5rem;
        margin:15.6px;
        font: size 29px;;
        background: #e6e6e6;
    }
    #search-form #search-box{
        width: 90%;
        margin: 0 1rem;
    }
    main .img-banner{
        width: 650px;
    }
    footer .rede-social-footer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 3px;
    }
    main .services{
        display: flex;
        flex-wrap: wrap;
        margin-top: 5%;
        align-items: center;
    }
    main .others-services{
        position: relative;
        display: flex;
        flex-wrap: wrap;
        font-size: 2.5rem;
    }
    main .animation-rainbow-text{
        position: relative;
        display: flex;
        flex-direction: column;
        width: 50%;
    }
    .dog-main{
        display: none;
    }
}
@media (max-width:510px){
    
    html{
        font-size: 44%;
    }

    #container header{
        display: flex;
        padding: 1rem 2rem;
    }
    header .box-logo{
        width: 150px;
    }
    header .logo{
        color: var(--black);
        font-size: 20px;
        font-weight: bolder;   
    }
    header .fa-bars, .fa-search, .fa-shopping-cart, .fa-heart, .fa-user{
        cursor: pointer;
        margin-left: 1px;
        height: 31px;
        line-height: 31px;
        width: 31px;
        text-align: center;
        font-size: 16px;
        color: #000;
        border-radius:40%;
        background:#e6e6e6;
    }
    .search-form{
        width: 350px;
    } 
    #container footer{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    main .img-banner{
        width: 360px;
        padding-right: 50px;
    }
    .login-form{
        width: 325px;
    }
    main .services{
        display: flex;
        flex-direction: column;
        margin-top: -160%;
    }
}
@media (max-width:385px){
    main .services{
        display: flex;
        flex-direction: column;
        margin-top: -120%;
    }
}