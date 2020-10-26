import styled from 'styled-components';

export const NavComponent=styled.nav`
    background-color:#24292E;
    padding:0.6rem 4rem;
    a{
        text-decoration:none;
    }
    .nav-logo{
        width:100px;
        height:50px;
        object-fit:contain;
    }
    .cart{
        background-color:#ffffff;
        padding:0.3rem 1.2rem;
        border-radius:5px;
        .nav-cart{
            .icon-cart{
                font-size:2rem;
                color:#FF0000;
            }
        }
        .cart-item-counter{
            .count{
                color:#000000;
                font-weight: 700;
            }
        }
    }
`