function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  if (!input || !chatBox) return;

  const userText = input.value.trim();
  if (!userText) return;

  addMessage(userText, "user");

  const pageType = document.body.dataset.page || "";
  const botReply = getBotResponse(userText, pageType);

  setTimeout(() => {
    addMessage(botReply, "bot");
  }, 400);

  input.value = "";
  input.focus();
}

function addMessage(text, type) {
  const chatBox = document.getElementById("chatBox");
  if (!chatBox) return;

  const message = document.createElement("div");
  message.className = `message ${type}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerText = text;

  message.appendChild(bubble);
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input, pageType) {
  const text = input.toLowerCase();

  if (pageType === "zone1") {
    if (text.includes("무엇") || text.includes("뭐")) {
      return "Vertical AX 존은 제조, 물류, 금융 등 산업별 AX 적용 사례를 소개하는 공간입니다.";
    }
    if (text.includes("ai")) {
      return "이 존에서는 AI를 실제 산업 운영에 적용하는 사례를 중심으로 설명합니다.";
    }
    if (text.includes("kt")) {
      return "KT는 AI, Cloud, Network 역량을 바탕으로 산업별 AX 전환을 지원합니다.";
    }
    return "Vertical AX 존에서는 산업별 AI 전환 사례와 적용 방향을 확인할 수 있습니다.";
  }

  if (pageType === "zone2") {
    if (text.includes("무엇") || text.includes("뭐")) {
      return "Public AX 존은 공공 분야의 디지털 전환과 시민 편의 향상을 위한 AX 사례를 소개합니다.";
    }
    if (text.includes("공공")) {
      return "공공 AX는 행정, 안전, 민원, 도시 운영 등 다양한 영역에서 활용될 수 있습니다.";
    }
    if (text.includes("kt")) {
      return "KT는 공공기관의 서비스 혁신을 위해 AI Cloud 기반 AX 역량을 제공합니다.";
    }
    return "Public AX 존에서는 공공 서비스 혁신을 위한 AX 사례를 중심으로 볼 수 있습니다.";
  }

  if (text.includes("kt")) {
    return "KT는 AI Cloud 기반 AX 역량으로 고객사의 혁신을 지원합니다.";
  }

  if (text.includes("ai")) {
    return "AI는 데이터를 기반으로 학습하고 예측·분석·생성 등을 수행하는 기술입니다.";
  }

  return "원하는 전시 존으로 이동하면 더 구체적인 안내를 볼 수 있습니다.";
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("userInput");
  if (!input) return;

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  const pageType = document.body.dataset.page || "";

  if (pageType === "zone1") {
    addMessage("안녕하세요. Vertical AX 존입니다. 궁금한 내용을 입력해 주세요.", "bot");
  } else if (pageType === "zone2") {
    addMessage("안녕하세요. Public AX 존입니다. 궁금한 내용을 입력해 주세요.", "bot");
  }
});