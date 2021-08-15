import React from 'react'
import author from '../author.jpg'

function About() {
    return (
        <div id="about" className="container py-5">
            <div className="row">

                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrapper mb-5">
                        <img className="profile-img" src={author} alt="Anvar Khalid..."></img>
                    </div>
                </div>

                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">Haqqımda</h1>
                    <p>Mən Ənvər Xalid Milli Aviasiya Akademiyasının İnformasiya və texnologiayaları
                        ixtisasına 2015-ci ildə 550 balla qəbul olmuşam. Akademiyanı bitirdiyim ildəcə Azərbaycan Dövlət Aqrar Universitetinin 
                        magistraturasına "Tətbiqi proqram təminatı" ixtisaslaşması üzrə magistrant kimi qəbul olmuşam. 2019-cu ildə ODTÜ universitetinin online video-mühazirələrini verilən tapşrıqları uğurla icra edərək
                        professor, ODTÜ universitetinin rektoru Verşan Kök'dən imzalı sertifikat qazanmışam.
                        2021-ci ildə Michigan və Hong-Kong Universitetinin
                        mühazirələrini və layihələri uğurla təhvil verəcək online krediti olmayan kurslar üzrə
                        sertifikat qazanmışam.
                        2018-ci ildən freelance, remote işlər görürəm.
                        2021-ci ilin martında Optello və ardınca da Remote Hub-dan komanda yoldaşlarımla birgə iş götürdük.
                        2021-ci ilin iyununda artıq öz 11-ci nəsil əjdahamı aldım...
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About
