import styled from "styled-components";

type BotaoProps = {
    principal: boolean;
    fontSize?: string; //? - SERVE PARA DEIXR OPCIONAL A DECLARAÇÃO DO FONT-SIZE
}

const Botao = styled.button<BotaoProps>`
    background-color: ${(props) => (props.principal ? 'green' : 'blue')};
    font-size: ${(props) => props.fontSize || '16px'};
    `
//COMPONENTE CRIADO ATRAVÉS DE OUTRO COMPONENTE
const BotaoPerigo = styled(Botao)`
    background-color: red;
    color: #fff;

    span {
        text-decoration: line-through;
    }
`

function Teste() {
    return(
        <>
        <Botao fontSize="18px" principal>ENVIAR</Botao>
        <Botao fontSize="14px" principal={false}>CANCELAR</Botao>
        <BotaoPerigo as="a" principal>
            <span>
                NÃO CLIQUE AQUI
            </span>
        </BotaoPerigo>
        </>
    )
}

export default Teste
