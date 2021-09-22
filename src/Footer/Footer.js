import React from 'react'
import Styled from "./Footer.module.css";
export default function Footer() {
    return (
        <div className={Styled.footer}>
            <span class="footer-copyright">React Nodejs&nbsp;©&nbsp;&nbsp;{new Date().getFullYear()}.&nbsp;&nbsp;All Rights Reserved.</span>
        </div>
    )
}
