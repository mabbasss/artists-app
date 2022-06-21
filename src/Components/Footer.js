import './Footer.css';

let Footer=()=>{
    return(
        <div>
        <footer className="footer-bar bg-dark">
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm-6 footer-bar">
                        <div className="text-sm-left">
                            <p className="mb-0 footer-text para-desc mx-auto">&copy; 2020 Bootdey. Design with <i className="mdi mdi-heart text-danger"></i>.</p>
                        </div>
                    </div>

                    <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul className="list-unstyled terms-service text-sm-right mb-0">
                            <li className="list-inline-item mb-0"><a alt="" href="#" className="footer-text mr-2">About</a></li>
                            <li className="list-inline-item mb-0"><a alt="" href="#" className="footer-text mr-2">Services</a></li>
                            <li className="list-inline-item mb-0"><a alt="" href="#" className="footer-text mr-2">FAQs</a></li>
                            <li className="list-inline-item mb-0"><a alt="" href="#" className="footer-text">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <footer className="bg-dark py-5">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 mb-3">
                <div className="text-center">
                        <p className="text-muted para-desc mx-auto mt-3">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.</p>
                        <ul className="list-unstyled social-icon social mb-0 mt-4">
                            <li className="list-inline-item"><a alt="" href="#" className="rounded"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook fea icon-sm fea-social"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a></li>
                            <li className="list-inline-item"><a alt="" href="#" className="rounded"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram fea icon-sm fea-social"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></li>
                            <li className="list-inline-item"><a alt="" href="#" className="rounded"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter fea icon-sm fea-social"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a></li>
                            <li className="list-inline-item"><a alt="" href="#" className="rounded"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin fea icon-sm fea-social"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
    )
}

export default Footer;