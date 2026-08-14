# 🎓 畢業啦～ 高中畢業學分自我檢核 & 學習預警 App

專為台灣高中學生設計的手機端 graduation credit checker，支援 **108 課綱** 畢業門檻、**6 大學期快速切換**、**單鍵學分勾選開關**、**固定即時 Dashboard 計算** 以及 **三色學習畢業預警系統**！

---

## 🌟 核心特色

- **📱 手機最佳化 (Vertical Scroll Only)**：絕無左右滑動問題，觸控區域大於 48px，單手操控極致順暢。
- **⚡ 0 毫秒極速與 100% 離線隱私 (Pure LocalStorage)**：無雲端伺服器，資料儲存於手機 LocalStorage，注重隱私且離線可運行。
- **🎓 108 課綱預設範本**：
  - **畢業總學分** ≥ 150 學分
  - **部定必修** ≥ 102 學分
  - **選修學分** ≥ 40 學分
  - **校訂必修與其他** 彈性採計
- **🚨 學習畢業預警系統 (Smart Graduation Warning)**：
  - 🟢 **畢業安全**：進度理想，邁向畢業！
  - 🟡 **畢業預警**：剩餘容錯空間較小，需謹慎修課。
  - 🔴 **嚴重缺口**：算入未來學分仍有缺口，即時提示重修建議。
- **🎉 達標爆花彩帶動畫 (Confetti)**：滿分或達標時享受爆花慶祝！
- **📦 資料備份與復原**：支援 JSON 備份檔下載與匯入，方便更換手機或傳給同學。

---

## 🚀 如何在 GitHub Pages 上發布您的專屬線上網址？

既然您已有 GitHub 帳號，只需 3 分鐘即可建立免費線上網址分享給全校同學使用：

1. **建立 GitHub Repository**
   - 登入 GitHub，點擊右上角 `+` -> `New repository`。
   - 專案名稱設為 `grad-check`（或任意名稱），選擇 **Public**。

2. **上傳程式碼檔案**
   - 將本專案中的 4 個檔案：
     - `index.html`
     - `style.css`
     - `app.js`
     - `README.md`
   - 拖曳上傳至該 GitHub Repository 即可！

3. **開啟 GitHub Pages 免費託管**
   - 在您的 Repository 頁面中，點選 **Settings** 頁籤。
   - 左側選單找到 **Pages**。
   - 在 **Build and deployment** 下方的 `Source` 選擇 `Deploy from a branch`。
   - Branch 選擇 `main` (或 `master`) / `/(root)`，點擊 **Save**。

4. **完成發布**！
   - 約等待 1 分鐘後，GitHub 就會自動產生線上網址：`https://<您的GitHub帳號>.github.io/grad-check/`
   - 學生開啟該網址即可在手機上直接操作與加入主畫面為 PWA 小工具！

---

## 💻 本地測試說明

直接雙擊開啟 `index.html` 即可在瀏覽器（Chrome/Safari/Edge）或 Chrome 開發者工具的手機模擬器（F12 -> Toggle Device Toolbar）中即時體驗。
