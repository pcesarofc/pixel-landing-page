import React from "react";
import './Dialog.css'
import Github from "./Github";
import Linkedin from "./Linkedin";


export default () => <div className="Dialog">
    <p>Contate-me ou acesse o meu repositório</p>
    <div className="links">
        <div className="linkedin">
            <a href="https://www.linkedin.com/in/pcwerneck/">
                <Linkedin/>
            </a>
        </div>
        <div className="github">
            <a href="https://github.com/pcesarofc/">
                <Github />
            </a>
        </div>
    </div>
</div>