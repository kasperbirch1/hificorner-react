import React, { useEffect } from 'react';
// import React, { useContext, useEffect } from 'react';
// import { GlobalContext } from '../../context/GlobalState';
import FooterSocialMediaIcons from './FooterSocialMediaIcons'


import styled from 'styled-components'
const StyledFooter = styled.footer`
    padding: 1rem;
    background: #a39161;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: auto ;
    grid-column-gap: 1rem;

    p {
        color: white;
        line-height: 1.2;
        font-weight: 600; 
    }

    div {
        a {
            text-transform: capitalize;
            display: block;
            text-decoration: none; 
            color: white;
            :hover {
                color: #706c71;
            }
        }
        a:first-child {
            margin-bottom: 1rem;
        }
    }
`

const Footer = () => {
    // const { transactions, getTransactions } = useContext(GlobalContext);
    useEffect(() => {
        // getTransactions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <StyledFooter>
            {/* {console.log("FOOTERFETCH", transactions)} */}
            <p>Hi Fi Corner (Edinburgh) Ltd is registered in Scotland</p>
            <div style={{ textAlign: 'center' }}>
                <a href="/returns">Returns &amp; Refunds</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <img src="https://www.hificorner.co.uk/pub/media/wysiwyg/Logos/pay_logos.png" alt="Payment by Worldpay, VISA, MasterCard, Maestro, JCB, PayPal" ></img>
            </div>
            <FooterSocialMediaIcons />
        </StyledFooter>
    )
}

export default Footer
