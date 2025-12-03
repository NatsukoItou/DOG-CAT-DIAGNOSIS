// ルーティング用ライブラリ
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// MUIのテーマ・CSSリセット
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
// 各画面コンポーネント
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
// アプリ全体のCSS
import "./App.css";

// MUIのダークテーマ設定
const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    mode: "dark",
    background: {
      default: "#1a1a2e",
    },
    primary: {
      main: "#FF6B6B",
    },
    secondary: {
      main: "#4ECDC4",
    },
  },
});

// アプリ全体のルートコンポーネント
function App() {
  return (
    // MUIテーマ適用
    <ThemeProvider theme={theme}>
      {/* CSSリセット（MUI推奨） */}
      <CssBaseline />
      {/* ルーティング設定 */}
      <Router>
        <Routes>
          {/* ホーム画面 */}
          <Route path="/" element={<Home />} />
          {/* クイズ画面 */}
          <Route path="/quiz" element={<Quiz />} />
          {/* 結果画面 */}
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
