### Hooks를 통해 state를 함수형 컴포넌트에서도 사용이 가능해졌다.

- 함수형 vs 클래스형
  - 메모리 자원을 함수형 컴포넌트보다 덜 사용한다.
  - 컴포넌트 선언이 편하다.
  - state와 lifeCycle을 사용할 수 없었는데 Hook를 통해 해결!

- useState 
  - 두 개의 value를 return 한다. 첫번째는 값을, 두번째는 변경을 담는다. 
  - const [item, setItem] = useState()의 형식으로 사용되며 괄호 안에는 상태의 초기값을 담는다.

- useEffect
  - Hooks에서는 useEffect를 통해 life-cycle method를 대체한다.
  - useEffect(실행할 함수, 함수를 실행시킬 조건 -> 배열의 형태이다.)
  - useEffect는 함수를 반환할 수 있는데 이를 clean-up 함수라고 부르며 useEffect가 실행될 때마다 실행되는 함수이다. Unmount가 될 때 정리하거나 unscribe 해야할 것이 있다면 return 값으로 전달(ComponentWillUnmount의 역할)

- 생명주기(life-cycle)란?
  ![](https://velog.velcdn.com/images/abroak07/post/9dcb0a5d-0cea-441e-9110-f624e485a8cc/image.png)
  
  - 컴포넌트가 마운트 된 후 (ComponentDidMount)
  - 컴포넌트가 업데이트 되고 난 후(ComponentDidUpdate)
  - 컴포넌트가 언마운트 되기 전(ComponentWillUnMount)

