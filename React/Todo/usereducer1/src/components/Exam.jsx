import { useReducer } from "react";

function reducer(state, action){
  switch (action.type){
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
        return state - action.data;
    default:
      return  state;
  }

}

// 예시 실행 흐름
// 초기 상태는 0으로 설정됩니다.
// + 버튼을 클릭하면 onClickPlus가 실행되어 INCREASE 액션을 dispatch로 보내고, 상태가 1 증가합니다.
// - 버튼을 클릭하면 onClickMinus가 실행되어 DECREASE 액션을 dispatch로 보내고, 상태가 1 감소합니다.

const Exam = () =>{
  //dispatch 발송하다 => 상태가 변화가 있어한다는 사실을 알리는 발송함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    dispatch({
      type : "INCREASE",
      data :1,
    });
  }
  const onClickMinus = () => {
    dispatch({
      type : "DECREASE",
      data :1,
    });
  }


  return(
    <div>
    <h1>{state}</h1>
    <button onClick={onClickPlus}>+</button>
    <button onClick={onClickMinus}>-</button>
  </div>
  );
};
export default Exam;