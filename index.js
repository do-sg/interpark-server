// const express = require("express") ;  옛날 즉 commonjs 방식
import express from "express"; // 현대 방식 module 방식
import cors from "cors";
// 도움말 및 기능 테스트 Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import { options } from "./swagger/config.js";

const app = express();
const port = 4000; // 서버에 접속시 포트번호
// cors 처리(웹브라우저로 접속 시 보안관련 처리)
app.use(
  cors({
    origin: "*",
  })
);

// json 데이터를 사용하겠다고 설정
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// swagger 설정
const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// REST API 요청 처리
// 첫페이지
app.get("/", function (req, res) {
  res.send("인터파크 API");
});
// 게시판 API (백엔드 호출 함수)
// get 은 프론트에서 자료 요청
// localhost:4000/board : 게시판 자료를 요청.
app.get("/board", (req, res) => {
  console.log("GET", req);
  // DB 에서 조건을 보고 결과를 {} 만들어서 [] 담아서준다.
  // MongoDB, MaraiDB(MySql)
  const result = [
    {
      number: 1,
      writer: "철수",
      title: "제목입니다.",
      contents: "내용입니다.",
    },
    {
      number: 2,
      writer: "영희",
      title: "영희입니다.",
      contents: "내용입니다.",
    },
    {
      number: 3,
      writer: "훈희",
      title: "훈희입니다.",
      contents: "내용입니다.",
    },
  ];
  res.send(result);
});

// post 는 프론트에서 백엔드로 자료 전송
// localhost:4000/board : 게시판 자료를 추가한다.
// axios.post("/board", {자료})
app.post("/board", (req, res) => {
  // console.log("POST", req);
  console.log("BODY 프론트가 보낸 데이터", req.body);
  // req.body를 바탕으로 DB에 내용 추가
  res.send("게시물 추가에 성공하였습니다.");
});

// 인터파크 API (백엔드 호출 함수)
// visual 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/visual", (req, res) => {
  const result = {
    total: 6,
    visual_1: {
      file: "images/v1.png",
      url: "a.html",
    },
    visual_2: {
      file: "images/v2.jpg",
      url: "b.html",
    },
    visual_3: {
      file: "images/v3.jpg",
      url: "c.html",
    },
    visual_4: {
      file: "images/v4.jpg",
      url: "d.html",
    },
    visual_5: {
      file: "images/v5.jpg",
      url: "e.html",
    },
    visual_6: {
      file: "images/v6.png",
      url: "f.html",
    },
  };
  res.send(result);
});
// recommend 영역에 출력할 자료 요청
// localhost:4000/visual
app.get("/recommend", (req, res) => {
  const result = {
    total: 12,
    good_1: {
      image: "images/r1.jpg",
      discount: 44,
      price: 7130,
      desc: "[11/7 오쎈 다운로드쿠폰가 7,670원] 크리오 쿨 맥스 민트 치약 100g x8개 민트/스트롱 민트 택1_I",
      url: "a.html",
    },
    good_2: {
      image: "images/r2.jpg",
      discount: 26,
      price: 9900,
      desc: "[쇼핑앱추가쿠폰] 해태 포키 극세4+블루베리2+딸기2 /극세 44g * 8 / 빼빼로데이 / 특별한 날엔 포키",
      url: "a.html",
    },
    good_3: {
      image: "images/r3.jpg",
      discount: 28,
      price: 24500,
      desc: "[쇼핑앱 22,900원] [Online Exclusive] 네파 공용 비스코 플리스 자켓 7JF6182",
      url: "a.html",
    },
    good_4: {
      image: "images/r4.jpg",
      discount: 43,
      price: 30300,
      desc: "[앱다운시15%쿠폰증정] 종근당 락토핏 골드 50포 3통+30포/6통+30포 (유통기한 2025-01)",
      url: "a.html",
    },
    good_5: {
      image: "images/r5.jpg",
      discount: 25,
      price: 11800,
      desc: "[스포츠파크 특가] 불스원샷 스탠다드 360ml X 2개입",
      url: "a.html",
    },
    good_6: {
      image: "images/r6.jpg",
      discount: 74,
      price: 2500,
      desc: "[1봉 무료배송특가] 바다원 어포튀각 110g*1봉, 5봉구매시 1천원할인",
      url: "a.html",
    },
    good_7: {
      image: "images/r7.jpg",
      discount: 19,
      price: 13530,
      desc: "더 푸짐한 팔도 갓뚜껑 155g 12개입 / 대파육개장라면, 김치찌개라면",
      url: "a.html",
    },
    good_8: {
      image: "images/r8.jpg",
      discount: 10,
      price: 7110,
      desc: "[산지직송] 국내산 햇 양파 5kg (2개사면 1kg 추가증정)",
      url: "a.html",
    },
    good_9: {
      image: "images/r9.jpg",
      discount: 12,
      price: 24900,
      desc: "베베잇츠 동결건조 과일칩 10봉",
      url: "a.html",
    },
    good_10: {
      image: "images/r10.jpg",
      discount: 0,
      price: 68900,
      desc: "[슈퍼쎈데이]팸퍼스 베이비드라이 팬티 밴드 1박스 기저귀",
      url: "a.html",
    },
    good_11: {
      image: "images/r11.jpg",
      discount: 19,
      price: 49690,
      desc: "베어파우 LOKI 여성 겨울 방한 양털슬리퍼 방한화 4종택일",
      url: "a.html",
    },
    good_12: {
      url: "go.html",
    },
  };
  res.send(result);
});

// tour 영역에 출력할 자료 요청
app.get("/tour", (req, res) => {
  const result = {
    total: 9,
    tour_1: {
      image: "images/t1.jpg",
      special: "강력특가",
      desc: "룸온니 초특가",
      title: "인터컨티넨탈 알렌시아 평창",
      price: 158400,
      url: "a.html",
    },
    tour_2: {
      image: "images/t2.jpg",
      special: "국적기직항",
      desc: "라스베가스 준특급 2박, 5대특식 포함",
      title: "[미서부/단독/BEST] 3대도시+8대캐년 완전일주 7박10일 [아시아나]",
      price: 3399000,
      url: "a.html",
    },
    tour_3: {
      image: "images/t3.jpg",
      special: "히트상품",
      desc: "사이판 최대 워터파크 웨이브정글 이용가능",
      title: "[사이판5일]사이판 월드리조트_골드카드",
      price: 1049000,
      url: "a.html",
    },
    tour_4: {
      image: "images/t4.jpg",
      special: "강력특가",
      desc: "디럭스 킹, 정원뷰",
      title: "롤링힐스 호텔",
      price: 192360,
      url: "a.html",
    },
    tour_5: {
      image: "images/t5.jpg",
      special: "소아동반인기",
      desc: "얼리 체크인 or 레이트 체크아웃 포함",
      title:
        "[더욱 오래 단둘이]푸꾸옥 5일_특급서비스 얼리체크인OR레이트체크아웃 풀만리조트",
      price: 740000,
      url: "a.html",
    },
    tour_6: {
      image: "images/t6.png",
      special: "강력특가",
      desc: "디럭스 킹, 부분바다 전망, 리뉴얼 객실",
      title: "해운대 썬클라우드 호텔",
      price: 70000,
      url: "a.html",
    },
    tour_7: {
      image: "images/t7.jpg",
      special: "강력특가",
      desc: "스탠다드 더블",
      title: "글래드 여의도",
      price: 134869,
      url: "a.html",
    },
    tour_8: {
      image: "images/t8.jpg",
      special: "국적기직항",
      desc: "대한항공, 베스트셀러",
      title:
        "[베스트셀러] 동유럽 3국 9일, 체코/오스트리아/헝가리,대한항공,4성호텔,판도르프아울렛",
      price: 2599000,
      url: "a.html",
    },
    tour_9: {
      image: "images/t9.jpg",
      special: "베스트셀러",
      desc: "최다판매 상품",
      title:
        "[베스트셀러][부산-하노이 5일]★가족여행최고★하노이/하롱베이+옌뜨 5일",
      price: 679000,
      url: "a.html",
    },
  };
  res.send(result);
});

// 서버에서 Request 요청대기
app.listen(port, () => {
  console.log(`현재 웹서버가 ${port} 로 접속하였습니다.`);
});
