import React from "react";
import { useState, useRef, useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styled, {keyframes} from "styled-components";

const categoriesArray = ["Weeb", "Emotional Damage", "General", "Dares", "Nipponrish"];
const questionsArray = [
  [
    {
      q: "The 3rd opening is Blue Bird by Ikimono Gakari.",
      a: "What is a Naruto Shippuden Opening?",
      i: "",
      ia:"",
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
      a: "Using your incredible succ reallocate the M&M within 2 mins", 
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
      i: "Brock_question.jpg", 
      ia: "Brock_answer.jpg.jpg" 
    },

    { 
      q: "", 
      a: "What is the Code Geass Fan dub", 
      i: "CodeGeass_question.jpg", 
      ia: "CodeGeass_answer.jpg" 
    },

    { 
      q: "", 
      a: "What is the offical sub for Misfit at the Demon King Academy", 
      i: "MaouSama_question.jpg", 
      ia: "MaouSama_Answer.jpg" 
    },

    { 
      q: "", 
      a: "What is the Fan translation for Jojo's Bizzare Adventure Part 4: Diamond is Ubreakable", 
      i: "duwaang_question.jpg", 
      ia: "duwaang_answer.jpg" 
    },
    
    { 
      q: "", 
      a: "What is the Oficial Sub for Skull-face Bookseller Honda-san", 
      i: "HondaSan_question.jpg", 
      ia: "HondaSan_answer.jpg" 
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
      q: "The director behind the films Perfect Blue and Paprika.",
      a: "Who is Satoshi Kon?",
      i: "",
      ia: "",
    },
    {
      q: "This film was revered on release boasting an OST and 14 minute Standing Ovation.",
      a: "What is Belle?",
      i: "",
      ia: "",
    },
  ],
  [
    { 
      q: "Tony abbot eats this food item completely raw.", 
      a: "What is an Onion?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "This politician went to Hawaii and left Australia on fire.",
      a: "Who is Scott Morrison",
      i: "",
      ia: "" 
    },

    { 
      q: "This politician was initially against same sex marriage.", 
      a: "Who is Julia Gillard?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "This politician had an affair with another politician leading them to leave the premier.", 
      a: "Whos is Gladys ButterChicken?", 
      i: "", 
      ia: "" 
    },
    
    { 
      q: "This politician sniffed a woman's seat TWICE in the span of 10 minutes.", 
      a: "Who is Troy Buswell", 
      i: "", 
      ia: "" 
    },

  ],
  [
    { 
      q: "The protagonist of this wizard movie series is played by Daniel Radcliffe.", 
      a: "Who is Harry Potter?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "She is the oldest Kardashian sister.", 
      a: "Who is Kourtney Kardashian?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "They were the members of One Direction(first names).", 
      a: "Who are Nial, Liam, Harry, Louis, Zayn",
      i: "", 
      ia: "" 
    },

    { 
      q: "This TV series has 10 seasons and 6 protagonists", 
      a: "What is Friends?", 
      i: "", 
      ia: "" 
    },

    { 
      q: "He lives on Drury Lane and she is married to him.", 
      a: "Who is the Muffin Man?", 
      i: "", 
      ia: ""
    },
  ],
  [
    { 
      q: " ", 
      a: "What is hypers", 
      i: "hypers.png", 
      ia: "" 
    },

    { 
      q: "", 
      a: "What is feelsWeirdMan",
      i: "feelsWeirdMan.png", 
      ia: "" 
    },

    { 
      q: "", 
      a: "WHat is coomerHands", 
      i: "coomerhands.png", 
      ia: "" 
    },

    { 
      q: "", 
      a: "What is peepoHappy", 
      i: "peepohappy.png", 
      ia: "peepohappy_answer.jpg" 
    },

    { 
      q: "", 
      a: "What is based", 
      i: "based.png", 
      ia: "based_answer.png" 
    },
  ],
  [
    { 
      q: "",
      m:"Crossing Field.m4a",
      a: "Crossing Fields - LiSA", 
      i: "", 
      ia: "" 
    },

    { 
      q: "", 
      m:"Fly High.m4a",
      a: "Fly High - Burnout Syndromes", 
      i: "", 
      ia: "" 
    },

    { 
      q: "", 
      m:"BNHA OP.m4a",
      a: "The Day by Porno Graffitti", 
      i: "", 
      ia: "" 
    },

    { 
      q: "", 
      m:"Again.m4a",
      a: "Again by Yui", 
      i: "", 
      ia: "" 
    },
    
    { 
      q: "", 
      m:"Silhouette.m4a",
      a: "Silhouette by Kanaboon", 
      i: "", 
      ia: "" 
    },
  ],
];
const BlackScreen = styled.div`
position:fixed;
height:100%;
width:100%;
background-color: rgba(0,0,12,0.8);
top:0;
left:0;
z-index:99;
`
const ContentWrap = styled.div`
  background-color: #e7b1ffff;
  position:absolute;
  text-shadow:none;
  border: 5px solid #a4f6ffff;
  top: 3vw;
  left:15vw;
  right:15vw;
  bottom:3vw;
  padding:20px 50px;
  box-shadow: 20px 20px aqua;
  overflow:auto;
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
padding-top:10px;
  background-color: white;
  color: black;
  width: 250px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
const Image = styled.img`
  max-width:65vw;
  object-fit:scale-down;
  max-height: 50vw;
  bottom:0px;
`;
const GenericWrap = styled.div`
  text-align: center;
  color: black;
  padding: 10px;
  object-fit:contain;
  float:center;
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
    <BlackScreen>
    <ContentWrap>
      <ExitButton onClick={props.closeOnClick}> x </ExitButton>
      <Header> {props.question.q} </Header>
      {(props.question.m !== "" &&  props.question.m  !== undefined) ? 
          <audio controls src={props.question.m} type="audio/mpeg"> <code>audio</code> </audio>:""}
      {(props.question.i !== "" &&  props.question.i  !== undefined) ? <Image src={props.question.i} alt="" />: ""}
      <ShowAnswer onClick={props.SetAnswer}>
        
        <Arrow state={props.showanswer} />
        Answer
      </ShowAnswer>
      <GenericWrap>
        
        {props.showanswer ? props.question.a : ""}
        <br/>
        { (props.showanswer && (props.question.ia !== "" &&  props.question.ia  !== undefined)) ? 
          <Image src={props.question.ia} alt="" />:""}
      </GenericWrap>
    </ContentWrap>
    </BlackScreen>
  );
}
const Cell = styled.th`
  margin: 5px;
  width: 300px;
  height: 80px;
  margin: 20px;
`;
const BoxWrap = styled(Cell)`
  color:${(props) => (props.state ?  "white": "darkgray")};;
  text-shadow: 0px 0px 3px ${(props) => (props.state ?  "red": "black")};
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
  background-color: #fe77c8;
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
            SetAnswer(false);
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
  margin: 0;
  top: 0;
  position: absolute;
`;
const NavButtonWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  z-index:50;
`;

const SponsorButtonWrapper = styled.div`
  position: static;
  margin-right: 15px;
  padding-top: 5px;
  top: 5px;
  float:right;
`;

const NavButton = styled(Button)`
  align: center;
  display: inline;
  padding: 5px 15px 0px 15px;
  background-color: #ab8dd8;
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
const H99 = styled.div`
  font-size:0.2em;
  color: #504d66;
`
const TeamsWrap = styled.div`
display: flex;
justify-content:center;
text-align: center;
  margin: 0 auto;
`
const TeamWrap = styled.div`
background-color:#3f50e9;
display:inline-block;
  padding:10px 20px;
  font-size:2rem;
`
const InputWrap = styled.div`
  background-color: rgba(255,255,255,0.1);
  display:inline-flex;
  border:none;
  padding:5px;
  font-size:2rem;
  width: 6rem;
  position:relative;
  text-align:left;
`
const HalfArrow = styled(Button)`
  height:50%;
  position: absolute;
  padding:0px 5px;
  right:0;
  ${props=>props.direction}:0;
  font-size:1.5rem;
  :hover{
    background-color: rgba(255,255,255,0.2);
  }
`

function Input (props) {
  const [value, setValue] = useState(0);
  return (
    
    <InputWrap> 
      {value}
      <HalfArrow onClick = {()=> setValue(value + 100)} direction = "top" contentEditable="false">+</HalfArrow>
      <HalfArrow onClick = {()=> setValue(value - 100)} direction = "bottom" contentEditable="false">-</HalfArrow>
    </InputWrap>
    
  )
}
function Teams(props) {

  return (
    <TeamsWrap>
      {props.teams.map((team, index) => {
        return (<TeamWrap>{team}: <Input/></TeamWrap>)
      })}
    </TeamsWrap>
  )
}
function Page(props) {
  const teams = ["LOOOOONNGG","team2","team3"];
  const maxteams = 3;
  const [currTeam, setCurrTeam] = useState(0);
  const [currPage, setPage] = useState(0);
  const highestPage = 1;
  const cats = [categoriesArray, categoriesArray2];
  const qs = [questionsArray, questionsArray2];
  const factors = [1, 2];
  const arrays = qs.map((qArray) => {
    return qArray.map((row, rowIndex, mainArray) => {
      return row.map((element, colIndex) => {
        return true;
      })
    })
  });
  const [state, setArray] = useState(arrays.at(0));
  const [state2, setArray2] = useState(arrays.at(1));
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
      <H2> Board: {currPage + 1} </H2>{" "}
      <Teams currTeam = {currTeam} 
      changeTeam = {()=> setCurrTeam((currTeam + 1) % maxteams)}
      teams = {teams}
      />
      <MoneyGrid
        cats={cats.at(currPage)}
        qs={qs.at(currPage)}
        factor={factors.at(currPage)}
        state = {states.at(currPage)}
        setState = {setStates.at(currPage)}
      />

      <SponsorButtonWrapper> <H99>creds: @feinxcookies, @athymay, @g0n3wr0ng </H99>
      This event was made possible due to Arc's Return to Campus grant </SponsorButtonWrapper>

      <NavButtonWrapper>
        <NavButton onClick={() => setPage(Math.max(currPage - 1, 0))}>
          
          previous
        </NavButton>
        <NavButton onClick={() => setPage(Math.min(currPage + 1, highestPage))}>
          
          forward
        </NavButton>
      </NavButtonWrapper>
    </PageWrap>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
