Hooks를 통해 state를 함수형 컴포넌트에서도 사용이 가능해졌다.

- 함수형 vs 클래스형
  - 메모리 자원을 함수형 컴포넌트보다 덜 사용한다.
  - 컴포넌트 선언이 편하다.
  - state와 lifeCycle을 사용할 수 없었는데 Hook를 통해 해결!

- useState 
  - 두 개의 value를 return 한다. 첫번째는 값을, 두번째는 변경을 담는다. 
  - const [item, setItem] = useState()의 형식으로 사용되며 괄호 안에는 상태의 초기값을 담는다.

- useInput ( custom hooks 	 c  )