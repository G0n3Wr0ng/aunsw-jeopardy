import React from "react";
import { useState, useRef, useEffect} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import styled from "styled-components";

const categoriesArray = ["Blast From the Past", "Name the Seiyuu", "#general", "[   ]", "Where in the world"];
const questionsArray = [
  [// Category 1
    {
      q: "Ryuk's favourite fruit, He's always seen eating them",
      a: "What are Red Apples",
      i: "",
      ia: "apple.png",
    },
    {
      q: " Naruto’s iconic word that is largely known to not be a real Japanese word",
      a: " What is DATTEBAYO",
      i: "",
      ia: "dd.jpg",
    },

    {
      q: "The first duelist that Yugi faced off in the Duelist kingdom arc",
      a: " Who is Weevil Underwood",
      i: "",
      ia: "draw.webp",
    },
    {
      q: "The first Pokemon to grace our TV screens after the opening credits plays in the original TV Anime",
      a: "Who is Gengar and Nidorino",
      i: "",
      ia: "genger.png",
    },
    {
      q: "In Vampire Knight, This is Zero's main weapon to spite his foes",
      a: "What is the Bloody Rose",
      i: "gun.webp",
      ia: "",
    },
  ],
  [// Category 2
    { 
      q: "This man came from his humble beginings making CD Audio Drama but now is most known for playing Kento Nanami", 
      a: "Who is Kenjiro Tsuda", 
      i: "", 
      ia: "daddy.webp" 
    },

    { 
      q: "This english voice actor is known for voicing Gojo Satoru, Jinshi and Osamu Dazai ",
      a: "Who is Kaiji Tang",
      i: "helost.jpeg",
      ia: "tang.jpg" 
    },

    { 
      q: "The place is The voice actor who voiced Gintoki, Joseph Joestar and Karasuma", 
      a: "Who is Tomokazu Sugita", 
      i: "", 
      ia: "tomo.webp" 
    },

    { 
      q: "Uchida Maaya lends her voice for this character in Bocchi the Rock", 
      a: "Who is Seika Ijichi", 
      i: "maayaa.jpeg", 
      ia: "iji.jpeg" 
    },
    
    { 
      q: "The Japanese voice actor for Jean (AOT) and Chuuya (BSD)", 
      a: "Who is Kishō Taniyama", 
      i: "jj.webp", 
      ia: "ki.jpg" 
    },

  ],
  [// Category 3
    { 
      q: "T", 
      a: "W", 
      i: "", 
      ia: "" 
    },

    { 
      q: "T.", 
      a: "Who ", 
      i: "", 
      ia: ""
    
    }, 

    { 
      q: "This is the only Studio Ghibli movie to win an Oscar", 
      a: "What is Spirited Away",
      i: "", 
      ia: "noface.webp"
    },

    { 
      q: "P", 
      a: "W", 
      i: "", 
      ia: "" 
    },

    { 
      q: '""', 
      a: "W", 
      i: "", 
      ia: ""
    },
  ],
  [// Category 4
    { 
      q: "I wanna be the very best Like no one ever was to____", 
      a: "To catch them is my real test To train them is my cause", 
      i: "A_Horribly_Drawn_Pikachu.webp", 
      ia: "" 
    },

    { 
      q: "This is ___ ___ rush!", 
      a: "This is Japanese lunchtime rush", 
      i: "Japnese.png", 
      ia: "" 
    },

    { 
      q: "I’ll ___ ___ potato __… ___ ___ ___!", 
      a: "I’ll take a potato chip… and eat it", 
      i: "deaf.jfif", 
      ia: "" 
    },

    { 
      q: "Hawk, ___, awaken", 
      a: "Hawk, eggplant, awaken", 
      i: "huaktwua.jpg", 
      ia: "" 
    },

    { 
      q: "I am the Bone of my Sword. ___ ___ ___ ___ ___ ___ ___ ___ ___ blood.", 
      a: "I am the Bone of my Sword. Steel is my body and fire is my blood", 
      i: "boner.jpg", 
      ia: "" 
    },
  ],
  [// Category 5
    { 
      q: "", 
      a: "What is Your Name", 
      i: "irl_yourname.png", 
      ia: "anime_yourname.png" 
    },

    { 
      q: "", 
      a: "What is Steins;Gate", 
      i: "irl_steinsgate.png", 
      ia: "anime_steinsgate.png" 
    },

    { 
      q: "", 
      a: "What is Hibiki! Euphonium/ Sound! Euphonium ", 
      i: "irl_eupho.png", 
      ia: "anime_eupho.png" 
    },

    { 
      q: "", 
      a: "What is Yuru Camp", 
      i: "irl_yurucamp.png", 
      ia: "anime_yurucamp.png" 
    },
    
    { 
      q: "", 
      a: "What is Eromanga Sensei", 
      i: "irl_eromanga.png", 
      ia: "anime_eromanga.png" 
    },
  ],
  
];
const categoriesArray2 = ["Renews Quarterly", "Bait Bait Bait", "Batter Up", "Poorly Described", "Reverse Uno"];
const questionsArray2 = [
  [// Category 1
    {
      q: "nunn, nunn nunn, You Deer",
      a: "What is Shikanoko nokonoko Koshitantan/My Deer friend Nokotan",
      ia: "shika.jpg",
    },
    {
      q: "Who am I? I've never fallen in love with anyone before now. Until she became my stepsister.",
      a: " Who is Asamura Yuta?",
      i: "",
      ia: "o.jpg",
    },
    {
      q: "I looked up to the genius child actor who could cry in 5 seconds ever since I was a child",
      a: "Who is Kurokawa Akane?",
      i: "",
      ia: "as.avif",
    },
    {
      q: "Ngl I forgot what Alya's full name was…",
      a: "Who is Alisa Mikhailovna Kujou",
      i: "Webp.webp",
      ia: "",
    },
    {
      q: "Once wielded by the prophet Sid and now wielded by the soldier Kai. The sword to alter the course of reality.",
      a: "What is Code Holder",
      i: "was.jpg",
      ia: "",
    },
  ],
  [// Category 2
    { 
      q: "You Win", 
      a: "Good Job :D", 
      i: "yippe.jpg", 
      ia: "" 
    },

    { 
      q: "You Win again",
      a: "Just kidding Lose 400 points",
      i: "",
      ia: "doom.png" 
    },

    { 
      q: "Think of a number bigger than I am", 
      a: "What is 5", 
      i: "numbers.gif", 
      ia: "" 
    },

    { 
      q: "Trade Offer", 
      a: "What can you offer me for the points", 
      i: "trade.gif", 
      ia: "" 
    },
    
    { 
      q: "The correct thing to say after this (think)", 
      a: "What is say 'u no'", 
      i: "uno.png", 
      ia: "" 
    },

  ],
  [// Category 3
    { 
      q: "This anime has a protagonist named ‘Eijun Sawamura’", 
      a: "What is Ace of the Diamond/Diamond no Ace?", 
      i: "moo.jpg",
      ia: "" 
    },

    { 
      q: "The anime has the objective of creating the best striker in the world.", 
      a: "What is Blue Lock", 
      i: "", 
      ia: "eyes.jpg" 
    },

    { 
      q: "This sport has had the most animes made about it.", 
      a: "What is Baseball.",
      i: "bust.webp", 
      ia: "" 
    },

    { 
      q: "This person is known as the ‘Little giant’ and the inspiration for Hinata in Haikyuu", 
      a: "Who is Tenma Udai", 
      i: "Little_giant.webp", 
      ia: "" 
    },

    { 
      q: "This person is the captain of the Iwatobi High School Swim Club", 
      a: "Who Makoto Tachibana", 
      i: "", 
      ia: "fre.avif"
    },
  ],
  [// Category 4
    { 
      q: "Man punches and wins", 
      a: "What is One Punch Man", 
      i: "", 
      ia: "notjojo.webp" 
    },

    { 
      q: "Gamer games too hard and becomes bone master", 
      a: "What is Overlord",
      i: "", 
      ia: "overman.gif" 
    },

    { 
      q: "Girl searches for her missing mother, ends up playing baseball in a land far far away", 
      a: "What is A Place Further Than the Universe", 
      i: "", 
      ia: "base.jpg" 
    },

    { 
      q: "Author gets caught for tax evasion, anime takes 6 years for 3rd season to release", 
      a: "What is Log Horizon", 
      i: "", 
      ia: "nue.jpg" 
    },

    { 
      q: "A Child with immense trauma and troubled family circumstances goes on a daunting journey with unlikely allies to tasked with the immense goal to kill them all", 
      a: "What is Ao no exorcist/Blue Exorcist", 
      i: "", 
      ia: "blux.webp" 
    },
  ],
  [// Category 5
    { 
      q: "",
      m:"aprilreverse.wav",
      a: "What is Hikaru Nara by Goose House", 
      i: "", 
      ia: "yila.jpg" 
    },

    { 
      q: "", 
      m:"saoreverse.wav",
      a: "What is Crossing Fields by LiSA", 
      i: "", 
      ia: "aso.jpg" 
    },

    { 
      q: "", 
      m:"idolreverse.wav",
      a: "What is Idol by YOASOBI", 
      i: "", 
      ia: "mmmai.jpg" 
    },

    { 
      q: "", 
      m:"bocchireverse.wav",
      a: "What is Seishun Complex by Kesouku Band", 
      i: "", 
      ia: "anime_bocchi2.png" 
    },
    
    { 
      q: "", 
      m:"evareverse.wav",
      a: "Cruel Angel's Thesis by Yoko Takahashi", 
      i: "", 
      ia: "asskabig.png" 
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
  font-family: "Pacifico";
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
background-color:#5c6ae6;
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
  const teams = ["Quizz Buddies+","4 Piece","Team 3","Team 4"];
  const maxteams = 4;
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
      <H1> AUNSW Jeopardy </H1> 
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
      This event was sponsored by ARC Clubs and MANGAMATE </SponsorButtonWrapper>

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
