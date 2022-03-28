import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styled from "styled-components";

const categoriesArray = ["Weeb", "Emotional Damage", "General", "Dares", "Nipponrish"];
const questionsArray = [
  [
    {
      q: "The 3rd opening is Blue Bird by Ikimono Gakari.",
      a: "What is a Naruto Shippuden Opening?",
      i: "cute.jpg",
    },
    {
      q: "This anime series is based on the premise of summoning historical figures for a battle royale.",
      a: " What is the Fate series?",
      i: "",
      ia: "",
    },
    {
      q: "The fifth isekai series to join Isekai Quartet.",
      a: " What is The Rising of the Shield Hero/Tate no Yuusha no Nariagari?",
      i: "",
      ia: "",
    },
    {
      q: "This anime is infamous for repeating the same episode with minor differences eight times in a row.",
      a: "What is The Melancholy of Haruhi/Suzumiya Haruhi no Yuutsu?",
      i: "",
      ia: "",
    },
    {
      q: "Hayao Miyazaki's directorial debut.",
      a: "What is Lupin III: The Castle of Cagliostro/Lupin III: Cagliostro no Shiro?",
      i: "",
      ia: "",
    },
  ],
  [
    { 
      q: "The smallest amount of incrementable data in a computer.", 
      a: "What is a bit?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "The policy undertaken is by a government to help either increase or decrease a nation's economy by altering its tax levels and spending habits.",
      a: "What is the Fiscal Policy?",
      i: "",
      ia: "" 
    },

    { 
      q: "The place is Diogenes the cynic said to have lived.", 
      a: "What is a barrel?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "The adversarial system of law places two parties against each other against an impartial person or group of persons.", 
      a: "What is the law system used in Australia?", 
      i: "", 
      ia: "" 
    },
    
    { 
      q: "The act of maintaining a relatively stable equilibrium between physical and chemical conditions through physiological changes.", 
      a: "What is homeostasis?", 
      i: "", 
      ia: "" 
    },

  ],
  [
    { 
      q: "This Australian Mountain was named after a Polish-Lithuanian freedom fighter.", 
      a: "What is Mount Kusciuszko?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "This artist's real name is Marshall Bruce Mathers III.", 
      a: "Who is Eminem?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "This is the most abundant element of the Earth's crust.", 
      a: "What is Oxygen",
      i: "", 
      ia: "" 
    },

    { 
      q: "Plutophobia", 
      a: "What is the fear of money?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "A man who stands for nothing will fall for anything.", 
      a: "Who is Malcolm X?", 
      i: "", 
      ia: ""
    },
  ],
  [
    { 
      q: " Bottle flip challenge", 
      a: "The chosen tribute will have 3 bottles, Contestants will have to flip all three bottles within a minute.", 
      i: "", 
      ia: "" 
    },

    { 
      q: "O face", 
      a: "Place an oreo on your forehead and succesfully manuevere it your mouth within a minute", 
      i: "", 
      ia: "" 
    },

    { 
      q: "Blow me down", 
      a: "Using nothing but an inflated balloon knock down the whole pyramid of cups within 45 seconds", 
      i: "", 
      ia: "" 
    },

    { 
      q: "Clean Up", 
      a: "", 
      i: "", 
      ia: "" 
    },

    { 
      q: "Spooning", 
      a: "Egg and Spoon race but eggs are scary so take some M&Ms and race the 10s clock", 
      i: "", 
      ia: "" 
    },
  ],
  [
    { 
      q: "", 
      a: "What is the offical Pokemon Dub", 
      i: "", 
      ia: "" 
    },

    { 
      q: "", 
      a: "What is the Code Geass Fan dub", 
      i: "", 
      ia: "" 
    },

    { 
      q: "", 
      a: "What is the offical sub for Misfit at the Demon King Academy", 
      i: "", 
      ia: "" 
    },

    { 
      q: "", 
      a: "What is the Fan translation for Jojo's Bizzare Adventure Part 4: Diamond is Ubreakable", 
      i: "", 
      ia: "" 
    },
    
    { 
      q: "", 
      a: "What is the Oficial Sub for Skull-face Bookseller Honda-san", 
      i: "", 
      ia: "" 
    },
  ],
];
const categoriesArray2 = ["Weeb", "Politicolols", "Popping", "Emotes", "Reverse Uno"];
const questionsArray2 = [
  [
    {
      q: "The Studio most famous for animating Head tilts",
      a: "Who is Studio Shaft?",
      i: "cute.jpg",
    },
    {
      q: "This man helped prevent world war 3 and has the well known alias Hououin Kyouma.",
      a: " Who is Okabe Rintarou?",
      i: "",
      ia: "",
    },
    {
      q: "The voice actor who voiced Gintoki, Joseph Joestar and Karasuma",
      a: "Who is Tomokazu Sugita?",
      i: "",
      ia: "",
    },
    {
      q: "This anime is infamous for repeating the same episode with minor differences eight times in a row.",
      a: "What is The Melancholy of Haruhi/Suzumiya Haruhi no Yuutsu?",
      i: "",
      ia: "",
    },
    {
      q: "Hayao Miyazaki's directorial debut.",
      a: "What is Lupin III: The Castle of Cagliostro/Lupin III: Cagliostro no Shiro?",
      i: "",
      ia: "",
    },
  ],
  [
    { 
      q: "The smallest amount of incrementable data in a computer.", 
      a: "What is a bit?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "The policy undertaken is by a government to help either increase or decrease a nation's economy by altering its tax levels and spending habits.",
      a: "What is the Fiscal Policy?",
      i: "",
      ia: "" 
    },

    { 
      q: "The place is Diogenes the cynic said to have lived.", 
      a: "What is a barrel?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "The adversarial system of law places two parties against each other against an impartial person or group of persons.", 
      a: "What is the law system used in Australia?", 
      i: "", 
      ia: "" 
    },
    
    { 
      q: "The act of maintaining a relatively stable equilibrium between physical and chemical conditions through physiological changes.", 
      a: "What is homeostasis?", 
      i: "", 
      ia: "" 
    },

  ],
  [
    { 
      q: "This Australian Mountain was named after a Polish-Lithuanian freedom fighter.", 
      a: "What is Mount Kusciuszko?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "This artist's real name is Marshall Bruce Mathers III.", 
      a: "Who is Eminem?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "This is the most abundant element of the Earth's crust.", 
      a: "What is Oxygen",
      i: "", 
      ia: "" 
    },

    { 
      q: "Plutophobia", 
      a: "What is the fear of money?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "A man who stands for nothing will fall for anything.", 
      a: "Who is Malcolm X?", 
      i: "", 
      ia: ""
    },
  ],
  [
    { 
      q: " Bottle flip challenge", 
      a: "The chosen tribute will have 3 bottles, Contestants will have to flip all three bottles within a minute.", 
      i: "", 
      ia: "" 
    },

    { 
      q: "O face", 
      a: "Place an oreo on your forehead and succesfully manuevere it your mouth within a minute", 
      i: "", 
      ia: "" 
    },

    { 
      q: "Blow me down", 
      a: "Using nothing but an inflated balloon knock down the whole pyramid of cups within 45 seconds", 
      i: "", 
      ia: "" 
    },

    { 
      q: "Clean Up", 
      a: "", 
      i: "", 
      ia: "" 
    },

    { 
      q: "Spooning", 
      a: "Egg and Spoon race but eggs are scary so take some M&Ms and race the 10s clock", 
      i: "", 
      ia: "" 
    },
  ],
  [
    { 
      q: "", 
      a: "What is the offical Pokemon Dub", 
      i: "", 
      ia: "" 
    },

    { 
      q: "", 
      a: "What is the Code Geass Fan dub", 
      i: "", 
      ia: "" 
    },

    { 
      q: "", 
      a: "What is the offical sub for Misfit at the Demon King Academy", 
      i: "", 
      ia: "" 
    },

    { 
      q: "", 
      a: "What is the Fan translation for Jojo's Bizzare Adventure Part 4: Diamond is Ubreakable", 
      i: "", 
      ia: "" 
    },
    
    { 
      q: "", 
      a: "What is the Oficial Sub for Skull-face Bookseller Honda-san", 
      i: "", 
      ia: "" 
    },
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
  glow:
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
  width: 400px;
  height: 400px;
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
      <ExitButton onClick={props.closeOnClick}> x </ExitButton>{" "}
      <Header> {props.question.q} </Header> <br />{" "}
      {props.question.i !== "" ? <Image src={props.question.i} alt="" /> : ""}{" "}
      <ShowAnswer onClick={props.SetAnswer}>
        {" "}
        <Arrow state={props.showanswer} />
        Answer
      </ShowAnswer>
      <GenericWrap>
        {" "}
        {props.showanswer ? props.question.a : ""}{" "}
      </GenericWrap>{" "}
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
  const [state, setState] = useState(true);
  const [visible, setVisible] = useState(false);
  const [answer, SetAnswer] = useState(false);
  const [hover, SetHover] = useState(false);
  return (
    <BoxWrap state={state} hover={hover}>
      <FullDiv
        onClick={() => {
          setVisible(true);
        }}
        onMouseEnter={() => SetHover(true)}
        onMouseLeave={() => SetHover(false)}
      >
        {" "}
        {props.value}{" "}
      </FullDiv>{" "}
      {visible ? (
        <ShowQuestion
          question={props.question}
          visible={visible}
          closeOnClick={() => {
            setVisible(false);
            setState(false);
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
        {" "}
        {props.cats.map((element, col) => (
          <CatWrap> {element} </CatWrap>
        ))}{" "}
      </tr>{" "}
      {props.qs.map((row, rowIndex, mainArray) => (
        <tr>
          {" "}
          {row.map((element, colIndex) => (
            <Box
              value={`$${(rowIndex + 1) * 100 * props.factor}`}
              question={mainArray.at(colIndex).at(rowIndex)}
            >
              {" "}
            </Box>
          ))}{" "}
        </tr>
      ))}{" "}
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
const H1 = styled.div`
  font-size: 3rem;
  font-family: "Pacifico", cursive;
  text-align: center;
  text-shadow: 2px 2px 5px #ffb1e0ff;
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
  return (
    <PageWrap>
      <H1> Aibou Arena </H1>{" "}
      <MoneyGrid
        cats={cats.at(currPage)}
        qs={qs.at(currPage)}
        factor={factors.at(currPage)}
      />{" "}
      <br />
      <NavButtonWrapper>
        <NavButton onClick={() => setPage(Math.max(currPage - 1, 0))}>
          {" "}
          previous{" "}
        </NavButton>{" "}
        <NavButton onClick={() => setPage(Math.min(currPage + 1, highestPage))}>
          {" "}
          forward{" "}
        </NavButton>
        page: {currPage}{" "}
      </NavButtonWrapper>{" "}
    </PageWrap>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
