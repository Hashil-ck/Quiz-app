import React, { useState } from "react";

function Quiz() {
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);

  const [value, setValue] = useState(0);
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const nextQuestion = () => {
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(false);

    setValue(value + 1);
  };

  const wrongAnswer1 = (e) => {
    console.log(e.target.id);
    setOption1(true);
    setWrong(wrong + 1);
    
  };
  const wrongAnswer2 = (e) => {
    setOption2(true);
    setWrong(wrong + 1);
   
  };
  const wrongAnswer3 = (e) => {
    setOption3(true);
    setWrong(wrong + 1);
  };
  const rightAnswer = () => {
    setOption4(true);
    setRight(right + 1);
  };
  const playAgain = () => {
    setRight(0);
    setWrong(0);
    setValue(0);
  };
  return (
    <div className="  flex justify-center items-center bg-slate-700 h-screen w-full ">
      <div className="  md:w-[500px]  w-screen md:h-[550px] h-screen mt-40 md:mt-20 p-5 flex justify-center">
        <div className=" w-[400px] h-[430px] mt-24 md:mt-1 bg-slate-600 rounded shadow-2xl shadow-slate-950 p-4">
          {value === 0 ? (
            <div>
              <div className="mb-3 text-2xl">01/10</div>
              <div>
                <p >1. What is React.js?</p>
                <input
                  disabled={option2 || option3 || option4 === true}
                  type="text"                 
                  value={"a) Open-source JavaScript back-end library"}
                  onClick={(e) => wrongAnswer1(e)}
                  className="mt-8 rounded h-[40px] w-[350px] outline-none cursor-pointer hover:bg-blue-200 p-2 disabled:pointer-events-none shadow options"
                  readOnly
                />

                <input
                  disabled={option1 || option3 || option4 === true}
                  value={"b) front-end library to create a database"}
                  onClick={(e) => wrongAnswer2(e)}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />

                <input
                  disabled={option2 || option1 || option4 === true}
                  value={"c) Frame Work"}
                  onClick={(e) => wrongAnswer3(e)}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />

                <input
                  disabled={option2 || option3 || option1 === true}
                  value={"d) JavaScript front-end library"}
                  onClick={(e) => rightAnswer(e)}
                  className="mt-2 rounded h-[40px] w-[350px]  outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />


                <div className="flex justify-end mt-3">
                  <button
                    onClick={() => nextQuestion()}
                    className="text-lg hover:font-black outline-none"
                  >
                   Next >>
                 </button>
                </div>
              </div>
            </div>
          ) : value === 1 ? (
            <div>
              <div className="mb-3 text-2xl">02/10</div>
              <div>
                <p>2. Which of the following acts as the input of a class-based component?</p>
                <input
                  onClick={(e) => wrongAnswer1(e)}
                  disabled={option2 || option3 || option4 === true}
                  value={"a) Class"}
                  className="mt-8 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />

                <input
                  onClick={(e) => wrongAnswer2(e)}
                  disabled={option1 || option3 || option4 === true}
                  value={"b) Factory"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />

                <input
                  onClick={(e) => rightAnswer(e)}
                  disabled={option2 || option1 || option3 === true}
                  value={"c) Props "}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer3(e)}
                  disabled={option2 || option4 || option1 === true}
                  value={"d) None of the Above"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options "
                  readOnly
                />

                <div className="flex justify-end mt-3">
                  <button
                    onClick={() => nextQuestion()}
                    className="text-lg hover:font-black outline-none"
                  >
                    Next >>
                  </button>
                </div>
              </div>
            </div>
          ) : value === 2 ? (
            <div>
              <div className="mb-3 text-2xl">03/10</div>
              <div>
                <p >3. Which of the following command is used to create react-js-app ?</p>

                <input
                  onClick={(e) => wrongAnswer1(e)}
                  disabled={option2 || option3 || option4 === true}
                  value={"a) npm install create-react-app"}
                  className="mt-8 rounded h-[40px] w-[350px] outline-none cursor-pointer p-2 disabled:pointer-events-none hover:bg-blue-200 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => rightAnswer(e)}
                  disabled={option2 || option3 || option1 === true}
                  value={"b) npx create-react-app appname"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer2(e)}
                  disabled={option1 || option3 || option4 === true}
                  value={"c) npx install create-react-app -g"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />

                <input
                  onClick={(e) => wrongAnswer3(e)}
                  disabled={option2 || option1 || option4 === true}
                  value={"d) install - l create-react-app"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options "
                  readOnly
                />

                <div className="flex justify-end mt-3">
                  <button
                    onClick={() => nextQuestion()}
                    className="text-lg hover:font-black outline-none"
                  >
                    Next >>
                  </button>
                </div>
              </div>
            </div>
          ) : value === 3 ? (
            <div>
              <div className="mb-3 text-2xl">04/10</div>
              <div>
                <p >
                  4. In React.js which one of the following is used to create a class for Inheritance ?
                </p>

                <input
                  onClick={(e) => rightAnswer(e)}
                  disabled={option2 || option1 || option3 === true}
                  value={"a) Extends"}
                  className="mt-8 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer1(e)}
                  disabled={option2 || option3 || option4 === true}
                  value={"b) Create"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none  hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer2(e)}
                  disabled={option3 || option1 || option4 === true}
                  value={"c) Inherits"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer3(e)}
                  disabled={option2 || option1 || option4 === true}
                  value={"d) Delete"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options "
                  readOnly
                />

                <div className="flex justify-end mt-3">
                  <button
                    onClick={() => nextQuestion()}
                    className="text-lg hover:font-black outline-none"
                  >
                    Next >>
                  </button>
                </div>
              </div>
            </div>
          ) : value === 4 ? (
            <div>
              <div className="mb-3 text-2xl">05/10</div>
              <div>
                <p>
                  5. What is the default port number in which the application run ?
                </p>

                <input
                  onClick={(e) => wrongAnswer1(e)}
                  disabled={option2 || option3 || option4 === true}
                  value={"a) 8080"}
                  className="mt-8 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />

                <input
                  onClick={(e) => rightAnswer(e)}
                  disabled={option2 || option3 || option1 === true}
                  value={"b) 3000"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />

                <input
                  onClick={(e) => wrongAnswer2(e)}
                  disabled={option1 || option3 || option4 === true}
                  value={"c) 5000"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />

                <input
                  onClick={(e) => wrongAnswer3(e)}
                  disabled={option2 || option1 || option4 === true}
                  value={"d) 4040"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />

                <div className="flex justify-end mt-3">
                  <button
                    onClick={() => nextQuestion()}
                    className="text-lg hover:font-black outline-none"
                  >
                    Next >>
                  </button>
                </div>
              </div>
            </div>
          ) : value === 5 ? (
            <div>
              <div className="mb-3 text-2xl">06/10</div>
              <div>
                <p >
                  6. Which of the following is a way to handle data in React.js ?
                </p>

                <input
                  onClick={(e) => wrongAnswer1(e)}
                  disabled={option2 || option3 || option4 === true}
                  value={"a) Services & Components"}
                  className="mt-8 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer2(e)}
                  disabled={option1 || option3 || option4 === true}
                  value={"b) State & Services"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => rightAnswer(e)}
                  disabled={option2 || option3 || option1 === true}
                  value={"c) State & Props"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer3(e)}
                  disabled={option2 || option1 || option4 === true}
                  value={"d) State & Component"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer disabled:pointer-events-none hover:bg-blue-200 p-2 shadow options"
                  readOnly
                />

                <div className="flex justify-end mt-3">
                  <button
                    onClick={() => nextQuestion()}
                    className="text-lg hover:font-black outline-none"
                  >
                    Next >>
                  </button>
                </div>
              </div>
            </div>
          ) : value === 6 ? (
            <div>
              <div className="mb-3 text-2xl">07/10</div>
              <div>
                <p>
                  7. In React.js, how we can pass the data from one component to another in React.js ?
                </p>

                <input
                  onClick={(e) => wrongAnswer1(e)}
                  disabled={option2 || option3 || option4 === true}
                  value={"a) SetState"}
                  className="mt-8 rounded h-[40px] w-[350px] outline-none disabled:pointer-events-none hover:bg-blue-200 cursor-pointer p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => rightAnswer(e)}
                  disabled={option2 || option3 || option1 === true}
                  value={"b) Props"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none disabled:pointer-events-none hover:bg-blue-200 cursor-pointer p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer2(e)}
                  disabled={option1 || option3 || option4 === true}
                  value={"c) PropTypes"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none disabled:pointer-events-none hover:bg-blue-200 cursor-pointer p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer3(e)}
                  disabled={option2 || option1 || option4 === true}
                  value={"d) Render with arguments"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none disabled:pointer-events-none hover:bg-blue-200 cursor-pointer p-2 shadow options"
                  readOnly
                />

                <div className="flex justify-end mt-3">
                  <button
                    onClick={() => nextQuestion()}
                    className="text-lg hover:font-black outline-none"
                  >
                    Next >>
                  </button>
                </div>
              </div>
            </div>
          ) : value === 7 ? (
            <div>
              <div className="mb-3 text-2xl">08/10</div>
              <div>
                <p>
                  8. Which of the following is used to render components in web pages ?
                  </p>

                <input
                  onClick={(e) => wrongAnswer1(e)}
                  disabled={option2 || option3 || option4 === true}
                  value={"a) ReactDOM_render"}
                  className="mt-8 rounded h-[40px] w-[350px] outline-none disabled:pointer-events-none hover:bg-blue-200 cursor-pointer p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer2(e)}
                  disabled={option1 || option3 || option4 === true}
                  value={"b) DOM_render()"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none disabled:pointer-events-none hover:bg-blue-200 cursor-pointer p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => rightAnswer(e)}
                  disabled={option2 || option3 || option1 === true}
                  value={"c) render()"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none disabled:pointer-events-none hover:bg-blue-200 cursor-pointer p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer3(e)}
                  disabled={option2 || option1 || option4 === true}
                  value={"d) transfer()"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none disabled:pointer-events-none hover:bg-blue-200 cursor-pointer p-2 shadow options"
                  readOnly
                />

                <div className="flex justify-end mt-3">
                  <button
                    onClick={() => nextQuestion()}
                    className="text-lg hover:font-black outline-none"
                  >
                    Next >>
                  </button>
                </div>
              </div>
            </div>
          ) : value === 8 ? (
            <div>
              <div className="mb-3 text-2xl">09/10</div>
              <div>
                <p className="">
                  9. What is a state in React?
                </p>

                <input
                  onClick={(e) => wrongAnswer1(e)}
                  disabled={option2 || option3 || option4 === true}
                  value={" a) A permanent storage."}
                  className="mt-8 rounded h-[40px] w-[350px] outline-none disabled:pointer-events-none hover:bg-blue-200 cursor-pointer p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer2(e)}
                  disabled={option1 || option3 || option4 === true}
                  value={"b) External storage of the component."}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none disabled:pointer-events-none hover:bg-blue-200 cursor-pointer p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => rightAnswer(e)}
                  disabled={option2 || option3 || option1 === true}
                  value={"c) Internal storage of the component."}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none disabled:pointer-events-none hover:bg-blue-200 cursor-pointer p-2 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer3(e)}
                  disabled={option2 || option1 || option4 === true}
                  value={"d) None of the above."}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none disabled:pointer-events-none hover:bg-blue-200 cursor-pointer p-2 shadow options"
                  readOnly
                />

                <div className="flex justify-end mt-3">
                  <button
                    onClick={() => nextQuestion()}
                    className="text-lg hover:font-black outline-none"
                  >
                    Next >>
                  </button>
                </div>
              </div>
            </div>
          ) : value === 9 ? (
            <div>
              <div className="mb-3 text-2xl">10/10</div>
              <div>
                <p>
                  10. How many numbers of elements a valid react component can return?
                </p>

                <input
                  onClick={(e) => wrongAnswer1(e)}
                  disabled={option2 || option3 || option4 === true}
                  value={"a) 10"}
                  className="mt-8 rounded h-[40px] w-[350px] outline-none cursor-pointer p-2 disabled:pointer-events-none hover:bg-blue-200 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer2(e)}
                  disabled={option1 || option3 || option4 === true}
                  value={"b) 4"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer p-2 disabled:pointer-events-none hover:bg-blue-200 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => rightAnswer(e)}
                  disabled={option2 || option3 || option1 === true}
                  value={"c) 1"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer p-2 disabled:pointer-events-none hover:bg-blue-200 shadow options"
                  readOnly
                />
                <input
                  onClick={(e) => wrongAnswer3(e)}
                  disabled={option2 || option1 || option4 === true}
                  value={"d) 2"}
                  className="mt-2 rounded h-[40px] w-[350px] outline-none cursor-pointer p-2 disabled:pointer-events-none hover:bg-blue-200 shadow options"
                  readOnly
                />

                <div className="flex justify-end mt-3">
                  <button
                    onClick={() => nextQuestion()}
                    className="text-lg text-green-400 hover:font-black outline-none"
                  >
                    Result >>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="w-full h-screen  ">
                <h1 className="text-center text-white text-2xl mt-3 ">Quiz Result:</h1>
               
                <p className="text-green-600 text-center mt-12 text-9xl">
                  {right}
                  <span className="text-white text-9xl">/</span>
                  <span className="text-white text-6xl ">10</span>
                </p>
                <div className="flex flex-row ">
                <img className="w-64 ms-[20%] -mb-[0.6rem] h-48" src="https://3.bp.blogspot.com/-fm0Cg5WFsy8/WF6YWJyUvuI/AAAAAAAFof0/nRsq3JLfwNwPqZA20fPDFAH8aOUFLH7nACLcB/s1600/AW356234_04.gif"  alt="Good" />

                <button className="text-white bg-green-400 h-9 w-[6rem] rounded-xl mt-[8rem] text-lg transition-all duration-900 ease-in hover:text-2xl" onClick={() => playAgain()}>
                  Retry
                </button>
              </div>
                <hr />
              </div>
             
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
