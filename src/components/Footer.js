import React from 'react'

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Bakı şəhəri, Xəzər rayonu, ofis 254</p>
                        </div>

                        <div className="d-flex">
                            <a href="tel:0507928518">+994507928518</a>
                        </div>
                        <div className="d-flex">
                            <p>info@anvarkhalid.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">

                            <div className="col">
                                <a className="footer-nav">Ana sehife</a>
                                <br>
                                </br>
                                <a className="footer-nav">Haqqimda</a>
                                <br>
                                </br>
                                <a className="footer-nav">Xidmetlerimiz</a>
                            </div>

                            <div className="col">
                                <a className="footer-nav">Tecrube</a>
                                <br>
                                </br>
                                <a className="footer-nav">Bizimle elaqe</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <p className="pt-3 text-center">
                            Copyright &copy; {new Date().getFullYear()}&nbsp; IT Brains Training Center | Müəllif hüquqları qorunur
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
