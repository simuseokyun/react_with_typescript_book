# 기록

## useEffect

리액트의 함수 컴포넌트에서 클래스 컴포넌트의 라이프사이클 함수와 비슷한 역할을 한다.
첫 번째 매개변수에는 콜백 함수를 설정할 수 있고 두 번째 매개변수에는 보통 배열을 전달한다.

- 빈 배열 전달 : 컴포넌트가 처음 화면에 표시된 후 한번만 호출 (Mount)
- 매개 변수 생략 : 컴포넌트가 화면에 표시 된 후에도 한번 실행되며, Props나 state의 변경에 의해 컴포넌트가 리렌더링되면 useEffect 훅이 다시 한번 실행 (Update)
- 배열에 특정 변수 설정 : 전달된 변수가 변경될 때에만 호출

## fetch

fetch(URL, {
method: "POST", // 사용할 메소드를 선택 ("GET", "POST", "PUT", "DELETE")
headers: { "content-Type" : "application/json" } // 요청의 headers에 전달할 값
body: JSON.stringify(data), // 요청의 body에 전달할 값
mode : "cors" , // cors, no-cors, same-origin 등과 같은 값을 설정
cache : "no-cache", // 캐시 사용 여부 (no-cache, reload, force-cache, only-if-cached)
})
