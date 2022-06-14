**Hooks를 통해 state를 함수형 컴포넌트에서도 사용이 가능해졌다.**

## 함수형 vs 클래스형
  - 메모리 자원을 함수형 컴포넌트보다 덜 사용한다.
  - 컴포넌트 선언이 편하다.
  - state와 lifeCycle을 사용할 수 없었는데 Hook를 통해 해결!

## useState 
  - 두 개의 value를 return 한다. 첫번째는 값을, 두번째는 변경을 담는다. 
  - const [item, setItem] = useState()의 형식으로 사용되며 괄호 안에는 상태의 초기값을 담는다.

### 1) useInput
  - 기본값을 넣은 상태로 input을 받을 수 있으며 글자수나 특정 글자 및 문자 제한이 가능하다.

### 2) useTabs
  - 탭을 클릭함으로써 원하는 탭에 해당하는 내용을 볼 수 있다.

## useEffect
  - Hooks에서는 useEffect를 통해 life-cycle method를 대체한다.
  - useEffect(실행할 함수, 함수를 실행시킬 조건 -> 배열의 형태이다.)
  - useEffect는 함수를 반환할 수 있는데 이를 clean-up 함수라고 부르며 useEffect가 실행될 때마다 실행되는 함수이다. Unmount가 될 때 정리하거나 unscribe 해야할 것이 있다면 return 값으로 전달(ComponentWillUnmount의 역할)

### 1) UseBeforeLeave
- 기본적으로 tap을 닫을 때 실행되는 함수이다.
### 2) UseClick
- 이벤트가 발생했을 때 함수를 파라미터로 받고 리턴할 수 있다.
### 3) UseConfirm
- 사용자가 어떤 action을 취하기 전에 확인하는 과정. 우선적으로 action을 멈춘 후 확인을 거치고 진행한다.
### 4) UseFadeIn
- hooks안에서 animation을 사용한다.
### 5) UseFullScreen
- 버튼을 클릭함으로써 요소에 대한 fullscreen을 제공한다.
### 6) UseNetWork
- network가 online or offline이 되었을 때 사용자에게 메시지를 띄울 수 있도록 한다.
### 7) UseNotification
- 알람이 실행되는 함수를 만든다. options를 사용해 custom도 가능하다.
### 8) UsePreventLeave
- 윈도우 창을 나가기 전에 변경사항을 저장하지 않았을 경우 안내 메시지를 띄워준다.
### 9) UseScroll
- 사용자가 스크롤을 할 때 액션을 띄울 수 있도록 한다.
### 10) UseTitle
- 문서의 제목을 업데이트 할 수 있도록 한다.


## 생명주기(life-cycle)란?
  ![](https://velog.velcdn.com/images/abroak07/post/9dcb0a5d-0cea-441e-9110-f624e485a8cc/image.png)
  
  - 컴포넌트가 마운트 된 후 (ComponentDidMount)
  - 컴포넌트가 업데이트 되고 난 후(ComponentDidUpdate)
  - 컴포넌트가 언마운트 되기 전(ComponentWillUnMount)

