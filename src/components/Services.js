import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'


const Services =() => {
    return (
        <div id="services"className="services" id="services">
            <h1 className="py-5">Xidmətlərim</h1>
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/></div>
                            <h3>6 aylıq MERN stack veb proqramlaşdırma tədrisi</h3>
                            <p>blablabla</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode}  icon={faFileCode} size="2x"/></div>
                            <h3>4 aylıq veb proqramlaşdırmaya intensiv giriş</h3>
                            <p>blablabla</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode}  icon={faFileCode} size="2x" /></div>
                            <h3>Veb saytların hazırlanması</h3>
                            <p>blablabla</p>
                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default Services
