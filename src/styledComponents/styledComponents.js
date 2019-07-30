import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledLink = styled(Link)`
    border-radius: 5px;
    border: 2px solid white;
    padding: 4px 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.2, 1.2);
        box-shadow: 0 5px 10px white;
    }
`;
