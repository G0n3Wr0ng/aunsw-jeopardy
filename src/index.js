import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styled, {keyframes} from "styled-components";

const categoriesArray = ["Weeb", "Emotional Damage", "cat3", "cat4", "cat5"];
const questionsArray = [
  [
    {
      q: "The 3rd opening is Blue Bird by Ikimono Gakari",
      a: "What is a Naruto Shippuden Opening",
      i: "cute.jpg",
      ia:"cute.jpg",
    },
    {
      q: "This anime series is based on the premise of summoning historical figures for a battle royale.",
      a: " What is Fate",
    },
    {
      q: "The fifth isekai series to join Isekai Quartet",
      a: " What is The Rising of the Shield Hero/Tate no Yuusha no Nariagari",
      i: "rect.png",
      ia: "",
    },
    {
      q: "This anime is infamous for repeating the same episode with minor differences eight times in a row",
      a: "What is The Melancholy of Haruhi/Suzumiya Haruhi no Yuutsu",
      i: "",
      ia: "",
    },
    {
      q: "Hayao Miyazaki's directorial debut",
      a: "What is Lupin III: The Castle of Cagliostro/Lupin III: Cagliostro no Shiro",
      i: "",
      ia: "",
    },
  ],
  [
    { q: "help", a: "me", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
  ],
  [
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
  ],
  [
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
  ],
  [
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
  ],
];
const categoriesArray2 = ["0w0", "cat2", "cat3", "cat4", "cat5"];
const questionsArray2 = [
  [
    { q: "THIS IS QUESTION SET 2", a: "answer: UR MOM", i: "cute.jpg" },
    { q: "help", a: "me", i: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
  ],
  [
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
  ],
  [
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
  ],
  [
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
  ],
  [
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
    { q: "", a: "", i: "", ia: "" },
  ],
];

const ContentWrap = styled.div`
  background-color: #e7b1ffff;
  position:absolute;
  border: 5px solid #a4f6ffff;
  top: 5vw;
  left:15vw;
  right:15vw;
  padding:20px 50px;
  box-shadow: 20px 20px aqua;
  z-index:99;
`;
const Button = styled.div`
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
`;
const ExitButton = styled(Button)`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: #fd3a2a;
  color: black;
  width: 50px;
  height: 50px;
`;
const ShowAnswer = styled(Button)`
  background-color: white;
  color: black;
  width: 250px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
const Image = styled.img`
  max-width:1400px;
`;
const GenericWrap = styled.div`
  text-align: center;
  color: black;
  padding: 10px;
`;
const Header = styled(GenericWrap)`
  font-size: 2rem;
`;
const Arrow = styled.div`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: ${(props) => (props.state ? "rotate(45deg)" : "rotate(-45deg)")};
  transition: 0.2s;
  margin: 3px;
`;

function ShowQuestion(props) {
  return (
    <ContentWrap>
      <ExitButton onClick={props.closeOnClick}> x </ExitButton>
      <Header> {props.question.q} </Header>
      {(props.question.i !== "" &&  props.question.i  !== undefined) ? <Image src={props.question.i} alt="" />: ""}
      <ShowAnswer onClick={props.SetAnswer}>
        
        <Arrow state={props.showanswer} />
        Answer
      </ShowAnswer>
      <GenericWrap>
        
        {props.showanswer ? props.question.a : ""}
        <br/>
        { (props.showanswer && (props.question.i !== "" &&  props.question.i  !== undefined)) ? 
          <Image src={props.question.ia} alt="" />:""}
        {(props.showanswer && (props.question.i !== "" &&  props.question.i  !== undefined)) ? 
          <audio src={props.question.m} type="audio/x-m4a" control autoplay />:""}
      </GenericWrap>
    </ContentWrap>
  );
}
const Cell = styled.th`
  margin: 5px;
  width: 300px;
  height: 80px;
  margin: 20px;
`;
const BoxWrap = styled(Cell)`
  color: ${(props) => (props.state ? "yellow" : "black")};
  background: linear-gradient(
    45deg,
    ${(props) =>
      (props.state === false && "#b1b2ffff") ||
      (props.hover === true && "#ffb1e0ff") ||
      "#B361C0"},
    #6c79e9
  );
  /* #6c79e9 40px,
  ${(props) =>
    (props.state === false && "#2222bb") ||
    (props.hover === true && "#ffb1e0ff") ||
    "#B361C0"} 50px */
`;
const CatWrap = styled(Cell)`
  background-color: #ffb1e0ff;
  color: white;
  text-shadow: 2px 2px 5px #ca007aff;
  font-size: 1.5rem;
`;
const FullDiv = styled.div`
  padding-top: 25px;
  height: 100%;
`;

function Box(props) {
  const [visible, setVisible] = useState(false);
  const [answer, SetAnswer] = useState(false);
  const [hover, SetHover] = useState(false);
  return (
    <BoxWrap state={props.state} hover={hover}>
      <FullDiv
        onClick={() => {
          setVisible(true);
        }}
        onMouseEnter={() => SetHover(true)}
        onMouseLeave={() => SetHover(false)}
      >
        
        {props.value}
      </FullDiv>
      {visible ? (
        <ShowQuestion
          question={props.question}
          visible={visible}
          closeOnClick={() => {
            setVisible(false);
            props.setState(false);
          }}
          SetAnswer={() => SetAnswer(!answer)}
          showanswer={answer}
        ></ShowQuestion>
      ) : (
        ""
      )}
    </BoxWrap>
  );
}
const Table = styled.table`
  background-color: black;
  margin-left: auto;
  margin-right: auto;
  border: 1px, solid, rgba(0, 0, 0, 1);
  width: 100%;
`;

function MoneyGrid(props) {
  // const array = new Array(5).fill(new Array(5).fill(0));
  //  ((index / 5) + 1)*200
  return (
    <Table>
      <tr>
        
        {props.cats.map((element, col) => (
          <CatWrap> {element} </CatWrap>
        ))}
      </tr>
      {props.qs.map((row, rowIndex, mainArray) => (
        <tr>
          
          {row.map((element, colIndex) => (
            <Box
              value={`$${(rowIndex + 1) * 100 * props.factor}`}
              question={mainArray.at(colIndex).at(rowIndex)}
              state = {props.state.at(colIndex).at(rowIndex)}
              setState = {(val) => props.setState(colIndex,rowIndex,val)}
            >
              
            </Box>
          ))}
        </tr>
      ))}
    </Table>
  );
}

const PageWrap = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  top: 0;
  position: absolute;
`;
const NavButtonWrapper = styled.div`
  position: absolute;
  align: center;
  padding-right: 15px;
  padding-top: 5px;
  bottom: 0;
  background-color: #ab8dd8;
`;
const NavButton = styled(Button)`
  height: 40px;
  align: center;
  padding: 15px;
  display: inline-block;
  &:hover {
    background-color: #b06bc5;
  }
`;
const glow = keyframes`
from {text-shadow: 0px 0px 10px #bd32d2, 0px 0px 20px #bd32d2;}
to {text-shadow: 0px 0px 15px #bd32d2, 0px 0px 25px #bd32d2;}
`
const H1 = styled.div`
  font-size: 3rem;
  font-family: "Pacifico", cursive;
  color:#ffffff;
  text-align: center;
  animation: ${glow} 1s ease-in-out infinite alternate;
  padding: 5px;
`;
const H2 = styled.div`
  font-size: 2rem;
  font-family: "Pacifico", cursive;
  text-align: center;
  text-shadow: 2px 2px 5px #ffb1e0ff;
  padding: 5px;
`;

function Page(props) {
  const [currPage, setPage] = useState(0);
  const highestPage = 1;
  const cats = [categoriesArray, categoriesArray2];
  const qs = [questionsArray, questionsArray2];
  const factors = [1, 2];
  const array = questionsArray.map((row, rowIndex, mainArray) => {
    return row.map((element, colIndex) => {
      return true;
    })
  })
  const array2 = questionsArray2.map((row, rowIndex, mainArray) => {
    return row.map((element, colIndex) => {
      return true;
    })
  })



  const [state, setArray] = useState(array);
  const [state2, setArray2] = useState(array2);
  const setState = (col,row, val) => {
    setArray(arr => Array.from(arr, (currRow,colIndex) => {
      return Array.from(currRow, (e, rowIndex) => {
        return ((colIndex === col && rowIndex === row) ? val : arr.at(colIndex).at(rowIndex))
      })
    }))
  }
  const setState2 = (col,row, val) => {
    setArray2(arr => Array.from(arr, (currRow,colIndex) => {
      return Array.from(currRow, (e, rowIndex) => {
        return ((colIndex === col && rowIndex === row) ? val : arr.at(colIndex).at(rowIndex))
      })
    }))
  }
  const states = [state,state2];
  const setStates = [setState, setState2];
  return (
    <PageWrap>
      <H1> Aibou Arena </H1>
      <MoneyGrid
        cats={cats.at(currPage)}
        qs={qs.at(currPage)}
        factor={factors.at(currPage)}
        state = {states.at(currPage)}
        setState = {setStates.at(currPage)}
      />
      <br />
      <NavButtonWrapper>
        <NavButton onClick={() => setPage(Math.max(currPage - 1, 0))}>
          
          previous
        </NavButton>
        <NavButton onClick={() => setPage(Math.min(currPage + 1, highestPage))}>
          
          forward
        </NavButton>
        page: {currPage}
      </NavButtonWrapper>
    </PageWrap>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
