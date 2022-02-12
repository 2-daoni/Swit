<h1 align= "center"> Swit 메신저 구현 과제</h1>

### :house: 배포 URL

![캡쳐](https://user-images.githubusercontent.com/85682854/153686261-fc3e9267-b3e6-4183-807f-18e5dc3e0944.png)

<br/>

### 🏗 프로젝트 구조도

```html
├── App.css
├── App.tsx
├── assets
│   ├── assets.ts
│   ├── main-logo.jpg
│   ├── svg-icons.svg
│   └── tab.svg
├── components
│   ├── Aside
│   │   ├── Aside.tsx
│   │   └── style.scss
│   ├── Auth
│   │   ├── SignInTest.tsx
│   │   └── style.scss
│   ├── ChatInput
│   │   ├── ChatInput.scss
│   │   ├── ChatInput.tsx
│   │   ├── TextArea.scss
│   │   └── TextArea.tsx
│   ├── MessageContainer
│   │   ├── Message.scss
│   │   ├── Message.tsx
│   │   ├── MessageContainer.scss
│   │   └── MessageContainer.tsx
│   ├── MessageToolbar
│   │   ├── MessageToolbar.scss
│   │   └── MessageToolbar.tsx
│   └── Nav
│       ├── Navbar.tsx
│       └── style.scss
├── index.css
├── index.tsx
├── react-app-env.d.ts
├── redux
│   ├── actions
│   │   ├── chatAction.ts
│   │   └── userAction.ts
│   ├── reducer
│   │   ├── chatReducer.ts
│   │   ├── index.ts
│   │   └── userReducer.ts
│   └── store.ts
├── types
│   ├── message.ts
│   ├── reduxTypes.ts
│   └── user.ts
└── utils
    ├── constants
    │   ├── chatData.ts
    │   └── userData.ts
    └── functions
        ├── generateMessage.ts
        ├── getDate.ts
        └── shortening.ts
```

### :exclamation: 설치방법
~~~
1. npm install
2. npm start
~~~



### :clapper: 구현내용

#### 1. 채팅 메시지 입력 (자동 조절)
~~~
- textarea 글자 입력 길이에 따라 textarea으 height 값이 변경되는 기능.
- 텍스트 줄바꿈 또는 작성한 텍스트 수정할 때 textarea의 높이 값이 변경됩니다.
~~~

### 2. 대화목록 데이터 모델 구성
~~~
- 메시지의 데이터 모델에는 userId, userName, profileImage, content, date 
- typescript를 이용하여 각각 데이터 모델에 type을 지정해 주었습니다.
~~~


