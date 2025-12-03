// ページ遷移用のフック
import { useNavigate } from "react-router-dom";
// MUIのUIコンポーネント
import { Button, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";

// 画面中央に配置するためのスタイル付きコンテナ
const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  textAlign: "center",
});

// グラデーション文字のタイトル
const Title = styled(Typography)({
  fontWeight: 800,
  marginBottom: "2rem",
  background: "linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
});

// 診断開始ボタンのスタイル
const StartButton = styled(Button)({
  background: "linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)",
  border: 0,
  borderRadius: 50,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 60,
  padding: "0 40px",
  fontSize: "1.2rem",
  fontWeight: "bold",
  textTransform: "none",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 6px 10px 4px rgba(255, 105, 135, .3)",
  },
});

// ホーム画面のメインコンポーネント
const Home = () => {
  const navigate = useNavigate(); // ページ遷移用

  return (
    <StyledContainer maxWidth="sm">
      {/* タイトル表示 */}
      <Title variant="h2" component="h1">
        犬派？猫派？
        <br />
        性格診断
      </Title>
      {/* サブタイトル・説明文 */}
      <Typography variant="h5" sx={{ mb: 6, color: "#a0a0a0" }}>
        5つの質問であなたのタイプを診断します。
      </Typography>
      {/* 診断開始ボタン。クリックでクイズ画面へ遷移 */}
      <StartButton onClick={() => navigate("/quiz")}>診断を始める</StartButton>
    </StyledContainer>
  );
};

export default Home;
