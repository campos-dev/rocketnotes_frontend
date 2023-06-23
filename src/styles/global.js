import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
margin:0;
padding:0;
box-sizing: border-box;
}

html{
    font-size:62.5%;
}

body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color:${({ theme }) => theme.COLORS.WHITE};
    -webkit-font-smoothing: antialiased;
}

body , input , button , textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
    outline: none;
}

a{
    text-decoration: none;
}

a, button{
    cursor: pointer;
    transition: 0.2s;
}

a:hover, button:hover{
    filter: brightness(.9);
}

`;
