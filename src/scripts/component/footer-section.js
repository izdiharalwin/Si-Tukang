class FooterSection extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="text-center text-lg-start text-white">
        <!-- Grid container -->
        <div class="container p-4 pb-0">
            <!-- Section: Links -->
            <section class="">
                <!--Grid row-->
                <div class="row">
                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">
                            Si Tukang
                        </h6>
                        <p>
                            Here you can use rows and columns to organize your footer
                            content. Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </p>
                    </div>
                    <!-- Grid column -->
                    <hr class="w-100 clearfix d-md-none" />
                    <!-- Grid column -->
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 services__link">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Services</h6>
                        <p>
                            <a class="text-white">Elektronik</a>
                        </p>
                        <p>
                            <a class="text-white">Bangunan</a>
                        </p>
                        <p>
                            <a class="text-white">Furniture</a>
                        </p>
                    </div>
                    <!-- Grid column -->
                    <hr class="w-100 clearfix d-md-none" />
                    <!-- Grid column -->
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 navigation__link">
                        <h6 class="text-uppercase mb-4 font-weight-bold">
                            Navigation
                        </h6>
                        <p>
                            <a href="#" class="text-white">Home</a>
                        </p>
                        <p>
                            <a href="#" class="text-white">About</a>
                        </p>
                        <p>
                            <a href="#" class="text-white">Services</a>
                        </p>
                    </div>
                    <!-- Grid column -->
                    <hr class="w-100 clearfix d-md-none" />
                    <!-- Grid column -->
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                        <p><i class="fa fa-home"></i> New York, NY 10012, US</p>
                        <p><i class="fa fa-envelope"></i> info@gmail.com</p>
                        <p><i class="fa fa-phone"></i> + 01 234 567 88</p>
                        <p><i class="fa fa-print"></i> + 01 234 567 89</p>
                    </div>
                    <!-- Grid column -->
                </div>
                <!--Grid row-->
            </section>
            <!-- Section: Links -->
            <hr class="my-3">
            <!-- Section: Copyright -->
            <section class="p-3 pt-0">
                <div class="row d-flex align-items-center">
                    <!-- Grid column -->
                    <div class="col-md-7 col-lg-8 text-center text-md-start text__footer">
                        <!-- Copyright -->
                        <div class="p-3">
                            © 2022 Copyright:
                            <a class="text-white" href="https://bit.ly/CPSG52">CPSG-52</a>
                        </div>
                        <!-- Copyright -->
                    </div>
                    <!-- Grid column -->

                    <!-- Grid column -->
                    <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                        <!-- Facebook -->
                        <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i
                                class="fa fa-facebook"></i></a>
                        <!-- Twitter -->
                        <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i
                                class="fa fa-twitter"></i></a>
                        <!-- Google -->
                        <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i
                                class="fa fa-google"></i></a>
                        <!-- Instagram -->
                        <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i
                                class="fa fa-instagram"></i></a>
                    </div>
                    <!-- Grid column -->
                </div>
            </section>
            <!-- Section: Copyright -->
        </div>
        <!-- Grid container -->
    </footer>
          `;
    }
}

customElements.define('footer-section', FooterSection);