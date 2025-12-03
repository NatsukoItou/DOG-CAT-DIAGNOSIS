import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Typography, Container, Stack } from "@mui/material";
import { styled, keyframes } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ReplayIcon from "@mui/icons-material/Replay";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const StyledContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  textAlign: "center",
  animation: `${fadeIn} 1s ease-out`,
});

const ResultCard = styled(Box)({
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  borderRadius: 30,
  padding: "3rem",
  width: "100%",
  maxWidth: 600,
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  marginBottom: "2rem",
});

const ResultTitle = styled(Typography)(({ type }) => ({
  fontWeight: 800,
  marginBottom: "1rem",
  background:
    type === "dog"
      ? "linear-gradient(45deg, #FF6B6B, #FF8E53)"
      : "linear-gradient(45deg, #4ECDC4, #556270)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const ActionButton = styled(Button)(({ bgcolor }) => ({
  background: bgcolor || "rgba(255, 255, 255, 0.1)",
  borderRadius: 50,
  padding: "10px 25px",
  color: "white",
  textTransform: "none",
  fontSize: "1rem",
  fontWeight: "bold",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    background: bgcolor ? bgcolor : "rgba(255, 255, 255, 0.2)",
    filter: "brightness(1.1)",
  },
}));

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result || "dog"; // Default for testing

  const resultData = {
    dog: {
      title: "あなたは「犬派」です！",
      description:
        "社交的でアクティブ、みんなとワイワイするのが大好きなあなた。素直な感情表現が周りの人を元気づけます。",
      color: "#FF6B6B",
      emoji: "🐕",
    },
    cat: {
      title: "あなたは「猫派」です！",
      description:
        "マイペースで自立心が強いあなた。一人の時間を大切にしつつ、信頼できる相手とは深い絆を築きます。",
      color: "#4ECDC4",
      emoji: "🐈",
    },
  };

  const data = resultData[result];

  const handleShare = (platform) => {
    const text = `私は「${
      result === "dog" ? "犬派" : "猫派"
    }」でした！ #性格診断`;
    const url = window.location.origin;

    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          text
        )}&url=${encodeURIComponent(url)}`,
        "_blank"
      );
    } else if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`,
        "_blank"
      );
    }
  };

  return (
    <StyledContainer maxWidth="md">
      <ResultCard>
        <Typography variant="h1" sx={{ fontSize: "5rem", mb: 2 }}>
          {data.emoji}
        </Typography>
        <ResultTitle variant="h3" type={result}>
          {data.title}
        </ResultTitle>
        <Typography
          variant="h6"
          sx={{ color: "#e0e0e0", lineHeight: 1.8, mb: 4 }}
        >
          {data.description}
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mb: 4 }}
        >
          <ActionButton
            startIcon={<TwitterIcon />}
            bgcolor="#1DA1F2"
            onClick={() => handleShare("twitter")}
          >
            Tweet
          </ActionButton>
          <ActionButton
            startIcon={<FacebookIcon />}
            bgcolor="#4267B2"
            onClick={() => handleShare("facebook")}
          >
            Share
          </ActionButton>
        </Stack>
      </ResultCard>

      <ActionButton
        startIcon={<ReplayIcon />}
        onClick={() => navigate("/")}
        sx={{ px: 4, py: 1.5 }}
      >
        もう一度診断する
      </ActionButton>
    </StyledContainer>
  );
};

export default Result;
