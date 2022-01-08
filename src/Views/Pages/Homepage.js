import React from 'react';
import './Homepage.css';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
// css from StyleSheet.css - bg color change garnu pare change from there
function Homepage() {
    return (
        <body data-bs-spy="scroll" data-bs-target="#navbarExample">
        
        {/* <!-- Navigation --> */}
        <nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
            <div class="container">
                {/* <!-- Image Logo -->
                <a class="navbar-brand logo-image" href="index.html"><img src="images/logo.svg" alt="alternative"></a>  */}
                <a class="navbar-brand logo-text" href="index.html">Product Reviews</a> 

                <button class="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav ms-auto navbar-nav-scroll">
                        <li class="nav-item">
                            <Link to='/' class="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <HashLink smooth to='#features' class="nav-link">Features</HashLink>
                        </li>
                        <li class="nav-item">
                            <HashLink smooth to='#details' class="nav-link" href="#details">Details</HashLink>
                        </li>
                    </ul>
                    <span class="nav-item">
                        <Link to='/signin' class="btn-outline-sm">Log in</Link>
                    </span>
                </div> 
            </div> 
        </nav>     
        {/* <!-- Header --> */}
        <header id="header" class="header">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="text-container">
                            <h1 class="h1-large">The #1 CRM app for <span class="replace-me">small business, young startups, bootstrappers</span></h1>
                            <p class="p-large">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dignissim, neque ut vanic barem ultrices sollicitudin</p>
                            <Link to='/register' class="btn-solid-lg">Sign up for free</Link>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="image-container">
                            <img class="img-fluid" src="../assets/img/header-illustration.svg" alt="alternative" />
                        </div>
                    </div> 
                </div> 
            </div> 
        </header> 
        {/* <!-- Features --> */}
        <div id="features" class="cards-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="h2-heading">Product Reviews application is packed with <span>awesome features</span></h2>
                    </div> 
                </div> 
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-icon">
                                <span class="fas fa-headphones-alt"></span>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Customer Sentiments</h4>
                                <p>Et blandit nisl libero at arcu. Donec ac lectus sed tellus mollis viverra. Nullam pharetra ante at nunc elementum</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-icon green">
                                <span class="far fa-clipboard"></span>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Sales Tracking</h4>
                                <p>Vulputate nibh feugiat. Morbi pellent diam nec libero lacinia, sed ultrices velit scelerisque. Nunc placerat justo sem</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-icon blue">
                                <span class="far fa-comments"></span>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Reporting Tool</h4>
                                <p>Ety suscipit metus sollicitudin euqu isq imperdiet nibh nec magna tincidunt, nec pala vehicula neque sodales verum</p>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
        </div>
        {/* <!-- Details 1 --> */}
        <div id="details" class="basic-1 bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-xl-5">
                        <div class="text-container">
                            <h2>Manage your customer’s expectations and get them to trust you</h2>
                            <p>Vestibulum ullamcorper augue ex, imperdiet tincidunt tellus bibendum inconsectetur rutrum mauris orbi scelerisque cursus augue, ac suscipit sem mattis at ut suscipit</p>
                        </div> 
                    </div> 
                    <div class="col-lg-6 col-xl-7">
                        <div class="image-container">
                            <img class="img-fluid" src="../assets/img/details-1.svg" alt="alternative" />
                        </div>
                    </div> 
                </div> 
            </div>
        </div>
        {/* <!-- Invitation --> */}
        <div class="basic-3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h4>Ioniq will change the way you think about CRM solutions due to it’s advanced tools and integrated functionalities</h4>
                        <Link to='/register' class="btn-outline-lg page-scroll">Sign up for free</Link>
                    </div> 
                </div> 
            </div> 
        </div>
        {/* <!-- Pricing --> */}
        <div id="pricing" class="cards-2 bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="h2-heading">Free forever tier and 2 pro plans</h2>
                    </div> 
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">
                                    <img class="decoration-lines" src="../assets/img/decoration-lines.svg" alt="alternative" /><span>Free tier</span><img class="decoration-lines flipped" src="../assets/img/decoration-lines.svg" alt="alternative" />
                                </div>
                                <ul class="list-unstyled li-space-lg">
                                    <li>Fusce pulvinar eu mi acm</li>
                                    <li>Curabitur consequat nisl bro</li>
                                    <li>Reget facilisis molestie</li>
                                    <li>Vivamus vitae sem in tortor</li>
                                    <li>Pharetra vehicula ornares</li>
                                    <li>Vivamus dignissim sit amet</li>
                                    <li>Ut convallis aliquama set</li>
                                </ul>
                                <div class="price">Free</div>
                                <a href="sign-up.html" class="btn-solid-reg">Sign up</a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">
                                    <img class="decoration-lines" src="../assets/img/decoration-lines.svg" alt="alternative" /><span>Advanced</span><img class="decoration-lines flipped" src="../assets/img/decoration-lines.svg" alt="alternative" />
                                </div>
                                <ul class="list-unstyled li-space-lg">
                                    <li>Nunc commodo magna quis</li>
                                    <li>Lacus fermentum tincidunt</li>
                                    <li>Nullam lobortis porta diam</li>
                                    <li>Announcing of invita mro</li>
                                    <li>Dictum metus placerat luctus</li>
                                    <li>Sed laoreet blandit mollis</li>
                                    <li>Mauris non luctus est</li>
                                </ul>
                                <div class="price">$19<span>/month</span></div>
                                <a href="sign-up.html" class="btn-solid-reg">Sign up</a>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">
                                    <img class="decoration-lines" src="../assets/img/decoration-lines.svg" alt="alternative" /><span>Professional</span><img class="decoration-lines flipped" src="../assets/img/decoration-lines.svg" alt="alternative" />
                                </div>
                                <ul class="list-unstyled li-space-lg">
                                    <li>Quisque rutrum mattis</li>
                                    <li>Quisque tristique cursus lacus</li>
                                    <li>Interdum sollicitudin maec</li>
                                    <li>Quam posuerei pellentesque</li>
                                    <li>Est neco gravida turpis integer</li>
                                    <li>Mollis felis. Integer id quam</li>
                                    <li>Id tellus hendrerit lacinia</li>
                                </ul>
                                <div class="price">$29<span>/month</span></div>
                                <a href="sign-up.html" class="btn-solid-reg">Sign up</a>
                            </div>
                        </div>

                    </div>
                </div> 
            </div> 
        </div> 
        {/* <!-- Footer --> */}
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer-col first">
                            <h6>About Website</h6>
                            <p class="p-small">Proin ut felis purus vestibulum in orci molestie, efficitur lacus ac pellentesque elit. Fusce mollis laoreet lobortis nulla ac efficitur lacus ac </p>
                        </div> 
                        <div class="footer-col second">
                        </div>
                        <div class="footer-col third">
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-facebook-f fa-stack-1x"></i>
                                </a>
                            </span>
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-twitter fa-stack-1x"></i>
                                </a>
                            </span>
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-pinterest-p fa-stack-1x"></i>
                                </a>
                            </span>
                            <span class="fa-stack">
                                <a href="#your-link">
                                    <i class="fas fa-circle fa-stack-2x"></i>
                                    <i class="fab fa-instagram fa-stack-1x"></i>
                                </a>
                            </span>
                            <p class="p-small">Quam posuerei pellent esque vam <a href="mailto:contact@site.com"><strong>contact@site.com</strong></a></p>
                        </div> 
                    </div> 
                </div> 
            </div>
        </div>
        {/* <!-- Copyright --> */}
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <p class="p-small">Copyright © <a href="#your-link">Your name</a></p>
                    </div>

                    <div class="col-lg-6">
                        <p class="p-small">Distributed By<a href="https://themewagon.com/"> Themewagon</a></p>    
                    </div>
                </div> 
            </div>
        </div>
        </body>
    )
}

export default Homepage;
