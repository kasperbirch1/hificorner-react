import { Link } from "@reach/router";
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    /* font-family: "museo-sans-rounded",sans-serif; */
    font-size: .9rem;
    line-height: 45px;
    font-weight: 300;
    text-transform: uppercase;
    color: white;

    :hover {
        color: #a39161 ;
    }
`;
