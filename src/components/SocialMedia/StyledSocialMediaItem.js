import styled from 'styled-components';
export const StyledSocialMediaItem = styled.div`
    display: grid;
    place-content: center;
    background-size: cover;
    background-position: center;

    position: relative;
    :hover::after {
        content: "";
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* transition: all 3s; */
        /* -webkit-transition: all 3s; */
    }

    a{    
        z-index: 10;
        color: white;
        text-decoration: none;
    }
    
    svg {
        margin: 5rem;
        font-size: 8rem;
            :hover {
            color: #a39161;
        }
    }
`;
