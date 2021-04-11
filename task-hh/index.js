import Head from 'next/head'
import Image from 'next/Image'
import Link from 'next/link'
import "@fortawesome/fontawesome-svg-core/styles.css"
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';



export default function ShopPost()
{
  
  return (
    <div className="container">
      <Head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#ffffff" />
        <title>ԱԴԵԿՎԱԴԻԶՄ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
      <Image src="/adekvadlogo.png" width={100}  height={100} />
        <navbar>
          <Link href="/">
            <a className="nav-link">ԱԴԵԿՎԱԴԻԶՄ <span><i className="fas fa-chevron-down"></i></span></a>
          </Link>
          <Link href="/">
            <a className="nav-link">ՏԵՍԱԴԱՐԱՆ <span><i className="fas fa-chevron-down"></i></span></a>
          </Link>
          <Link href="/">
            <a className="nav-link">ՄԻԱԲԱՆՈՒԹՅՈՒՆ <span><i className="fas fa-chevron-down"></i></span></a>
          </Link>
          <Link href="/">
            <a className="nav-link">ԿՈՒՍԱԿՑՈՒԹՅՈՒՆ <span><i className="fas fa-chevron-down"></i></span></a>
          </Link>
          <Link href="/">
            <a className="nav-link">ՆՈՐՈՒԹՅՈՒՆՆԵՐ<span><i className="fas fa-chevron-down"></i></span></a>
          </Link>
          <Link href="/">
            <a className="nav-link">ՀԱՆԳԱՆԱԿՈՒԹՅՈՒՆ <span><i className="fas fa-chevron-down"></i></span></a>
          </Link>
          <Link href="/">
            <a className="nav-link">E-SHOP <span><i className="fas fa-chevron-down"></i></span></a>
          </Link>
       </navbar> 
        <div className="lang">
          <Link href="/">
            <a className="eng"> <Image src ="/en.png"    width={35}  height={25} /> </a>
          </Link>
          <Link href="/">
            <a className="eng"> <Image src ="/am.png"    width={35}  height={25} /> </a>
          </Link>
        </div>
      </header>
      <div className="headerbottom">
        <form action="search">
          <div className="search_box pull-left">
            <input type="text" placeholder="Search"/>
          </div>
        </form>

        <div className = "privacy">
          <Link href="/">
            <a className="nav-link">Account</a>
          </Link>
          <Link href="/">
            <a className="nav-link">Wishlist</a>
          </Link>
          <Link href="/">
            <a className="nav-link">Cart</a>
          </Link>
          <Link href="/">
            <a className="nav-link">Login</a>
          </Link>
          <Link href="/">
            <a className="nav-link">Registration</a>
          </Link>
        </div>
      </div>
      <main>
        <div className="container">
          <div className="table">
            <div className="leftsidebar">
              <h2>Կատեգորիա</h2>
              <div className="types">
    
                <Link href="/"><a className="Category">Հագուստ	 <span><i className="fas fa-plus"></i></span></a></Link>
                <Link href="/"><a className="Category">Գլխարկներ <span><i className="fas fa-plus"></i></span> </a></Link>
                <Link href="/"><a className="Category">Ակսեսուարներ <span><i className="fas fa-plus"></i></span> </a></Link>
                <Link href="/"><a className ="Category">Հուշանվերներ <span><i className="fas fa-plus"></i></span> </a></Link>
                <Link href="/"><a className ="Category">Սպորտային Հագուստ<span><i className="fas fa-plus"></i></span> </a></Link>
                
              </div>
            </div>
            <div className="center">
              <h2>Ապրանքատեսակներ</h2>
              <div className="items">
                <Image src="/cap.png" width={400} height={400} />
                <Image src="/mug.png" width={400} height={400} />
                <Image src="/Shirt.png" width={400} height={400} />
                <Image src="/sweater.png" width={400} height={400} />
                <Image src="/cap.png" width={400} height={400} />
              </div>
            </div>
          </div>
              </div>
              </main>
      <div className="border">
       
        <Image src="/footerLogo.png"
        
            width={300}
            height={80} />
       
        <div className="social">
          <ul>
            <li><a href="https://www.facebook.com/adekvadism"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://vk.com/adekvadism"><i className="fab fa-vk"></i></a></li>
            <li><a href="https://www.instagram.com/adekvadism/"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UC-BYUsHHERUWbi3LwI4-2VA"><i className="fab fa-youtube"></i></a></li>
            <li><a href="https://t.me/Adekvad"><i className="fab fa-telegram"></i></a></li>
          </ul>
        </div>
      </div>
      <footer>
        
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Copyright © 2021 </a>
        <p>Ադեկվադիզմ ՀԿ </p>
      </footer>

      <style jsx>{`
        
        header{
          width:100%;
          display:flex;
          justify-content:space-around;
          align-items:center;
          padding-top:2rem;
          padding-bottom:2rem;
          background-color:#fff;
          -webkit-box-shadow: 1px 1px 5px rgb(0 0 0 / 8%); 
        }
        header lang{
          display:flex;
        }
        header lang a{
          margin-left:20px;
        }
        header navbar a{
          padding:1.95rem;
        }
        header navbar a:hover{
          background-color:#750d23;
          color:#fff;
        }
        .headerbottom{
          display flex;
          margin:30px auto;
          align-items:center;
          justify-content:space-evenly;
        }
        .headerbottom .privacy a{
          padding-top:1.95rem;
          padding-left:3.95rem;
          padding-right:3.95rem;
          font-size:25px;
          color:#750d23;
          font-wight:300;

        }
        .headerbottom .privacy a:hover{
          border-bottom:1px solid #750d23;

        }
        
        .search_box input {
          background: #750d23;
          border: medium none;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          height: 50px;
          border-radius:8px;
          outline: medium none;
          padding-left: 10px;
        } 
        main .container{
          width:2154px;
          margin:4% auto;
          
          
        }
        main .container .table{
          display flex;
          align-items: center;
          justify-content: space-between;
        }
         h2{
          color:#000;
          font-size:33px;
          position:relative;
          text-align:center;
        }
        main .center h2:after{
          content: "";
          position: absolute;
          width: 40%;
          left: -73px;
          border: 1px solid  #d4caca ;
          top: 23px;
        }
        main .center h2:before{
          content: "";
          position: absolute;
          width: 36%;
          right: -22px;
          border: 1px solid  #d4caca;
          top: 23px;
        }
        main .leftsidebar h2:after{
          left:-119px;
          content: "";
          position: absolute;
          width: 50%;
          border: 1px solid  #d4caca;
          top: 23px;
        }
        main .leftsidebar h2:before{
          left:322px;
          content: "";
          position: absolute;
          width: 50%;
          border: 1px solid  #d4caca;
          top: 22px;
        }
       
        main .leftsidebar .types{
          padding: 5rem 5em 5rem 2rem;
          border-radius:7px;
          border:3px solid #d4caca;
          display:grid;
        }
        main .leftsidebar .types link{
          margin:2rem 0;
          
        }
        main .leftsidebar  a{
          color:#800a10;
          font-size:20px;
          font-weight:600;
          margin:30px 0;
          position:relative;
        }
        main .leftsidebar  a span{
          position:absolute;
          left:250px;
        }
        main .center{  
          flex: 0 0 60%;
      }

        }
        main .center image{
          width:100%;
          padding-left:30px;

          
        }
        main .center .items{
          display:flex;
          flex-wrap:wrap;
          margin-top:90px;
          margin-left:30px;
        }
        footer {
          width: 100%;
          
          border-top: 5px solid #690d20;
          display: flex;
          justify-content:space-evenly;
          align-items: center;
          background-color:#750d23;
        }


        footer a {
          display: flex;
          justify-content:center;
          align-items: center;
          font-size:20px;
          color:#fff;
          margin-left: 3rem;
        }
        footer p{
          color:#fff;
          font-size:22px;
          align-self:center;
        }
         .border{
          background-color:#000;
          width:100%;
          display:flex;
          justify-content:space-evenly;
          align-items:center;
          padding-top:2rem;
          padding-bottom:2rem;
        }
        
        .border ul{
          list-style:none;
          display:flex;

        }
        .border ul li{
          padding-left:25px;
        }
        .border ul li a{
          color:#750d23;
          font-size:40px;
          font-weight:bold;
        }
        a {
          color: #000;
          text-decoration: none;
          font-size:18px;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
