import styles from './button.module.css';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// props in styled components
const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: ${props => props.btntype ? 'blue' : 'gray'};
    color: white;
    cursor: pointer;
`;

// extending styles
const SuccessButton = styled(Button)`
    background-color: #28a745;
`;


// global styles
const GlobalStyle = createGlobalStyle`
    h1{
        color:white;
        background-color: purple;
        font-family: Arial, sans-serif;
    }
    
    .myparagraph {
        font-family: 'Courier New', Courier, monospace;
        color: blue;
    }
`


function AppCss(){
    // return (
    //     <div className={`${styles.flex}`}>
    //         <button className={`${styles.mybutton} ${styles.primary}`}>
    //             My Primary Button
    //         </button>
    //         <button className={`${styles.mybutton} ${styles.secondary}`}>
    //             My Secondary Button
    //         </button>
    //     </div>
    // )

    // return (
    //     <div>
    //         <Button btntype="primary">Primary Button</Button>
    //         <br />
    //         <br />
    //         <Button>Secondary Button</Button>
    //         <br />
    //         <br />
    //         <SuccessButton>Success Button</SuccessButton>
    //     </div>
    // )


    return (
        <>
            <GlobalStyle />
            <h1>Welcome to My Styled App</h1>
            <p className="myparagraph">This is a paragraph with global styles.</p>
            <Button btntype="primary">Primary Button</Button>
            <br />
        </>
    );
}


export default AppCss;