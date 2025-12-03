import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Container,
  LinearProgress,
} from "@mui/material";
import { styled } from "@mui/system";
import { useDiagnosis } from "../hooks/useDiagnosis";

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  textAlign: "center",
});

const QuestionCard = styled(Box)({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  borderRadius: 20,
  padding: "3rem",
  width: "100%",
  maxWidth: 600,
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
});

const OptionButton = styled(Button)({
  width: "100%",
  padding: "1.5rem",
  margin: "1rem 0",
  fontSize: "1.1rem",
  borderRadius: 15,
  border: "1px solid rgba(255, 255, 255, 0.2)",
  color: "white",
  background: "rgba(255, 255, 255, 0.05)",
  transition: "all 0.3s ease",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.1)",
    transform: "translateY(-2px)",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
    borderColor: "#4ECDC4",
  },
});

const ProgressBar = styled(LinearProgress)({
  height: 10,
  borderRadius: 5,
  marginBottom: "2rem",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  "& .MuiLinearProgress-bar": {
    background: "linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)",
  },
});

// クイズ画面のメインコンポーネント
const Quiz = () => {
  const navigate = useNavigate(); // ページ遷移用

  // useDiagnosisフックで診断ロジック・状態を管理
  const {
    currentQuestion, // 現在の設問データ
    currentQuestionIndex, // 現在の設問番号
    totalQuestions, // 設問数
    isFinished, // 診断終了フラグ
    result, // 診断結果（dog/cat）
    handleAnswer, // 診断リセット処理
  } = useDiagnosis();

  // 診断結果がセットされたら結果画面へ遷移
  useEffect(() => {
    if (result) {
      navigate("/result", { state: { result } });
    }
  }, [result, navigate]);

  // 進捗バー用の進捗率計算
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  return (
    <StyledContainer maxWidth="md">
      {/* 進捗バーと設問番号表示 */}
      <Box sx={{ width: "100%", maxWidth: 600, mb: 4 }}>
        <Typography
          variant="body2"
          sx={{ color: "#a0a0a0", mb: 1, textAlign: "right" }}
        >
          {currentQuestionIndex + 1} / {totalQuestions}
        </Typography>
        <ProgressBar variant="determinate" value={progress} />
      </Box>

      {/* 設問と選択肢表示 */}
      <QuestionCard>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold" }}>
          {currentQuestion.text}
        </Typography>

        {/* 選択肢ボタン。クリックで回答処理 */}
        {currentQuestion.answers.map((answer, index) => (
          <OptionButton key={index} onClick={() => handleAnswer(answer.type)}>
            {answer.label}
          </OptionButton>
        ))}
      </QuestionCard>
    </StyledContainer>
  );
};

export default Quiz;
