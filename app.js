/* 畢業啦～ 🎓 高中學分檢核 App - JavaScript 核心邏輯 */

// 本地存儲 Key
const STORAGE_KEY = 'grad_check_app_data_v1';

// 預設 108 課綱範本數據
const DEFAULT_DATA = {
  currentGrade: 2, // 高一:1, 高二:2, 高三:3
  track: 'exp_science', // 預設組別：理組實驗班
  theme: 'light',
  subjects: [
    // === 高一上 (Sem 1) ===
    { id: 's1_1', sem: 1, name: '國語文 I', credits: 3, cat: 'required', passed: true },
    { id: 's1_2', sem: 1, name: '英語文 I', credits: 3, cat: 'required', passed: true },
    { id: 's1_3', sem: 1, name: '數學 I', credits: 4, cat: 'required', passed: true },
    { id: 's1_4', sem: 1, name: '歷史 I', credits: 2, cat: 'required', passed: true },
    { id: 's1_5', sem: 1, name: '地理 I', credits: 2, cat: 'required', passed: true },
    { id: 's1_6', sem: 1, name: '公民與社會 I', credits: 2, cat: 'required', passed: true },
    { id: 's1_7', sem: 1, name: '基礎物理', credits: 2, cat: 'required', passed: true },
    { id: 's1_8', sem: 1, name: '基礎化學', credits: 2, cat: 'required', passed: true },
    { id: 's1_9', sem: 1, name: '體育 I', credits: 2, cat: 'required', passed: true },
    { id: 's1_10', sem: 1, name: '全民國防教育 I', credits: 1, cat: 'required', passed: true },
    { id: 's1_11', sem: 1, name: '資訊科技', credits: 2, cat: 'required', passed: true },
    { id: 's1_12', sem: 1, name: '校訂必修 I', credits: 2, cat: 'other', passed: true },
    { id: 's1_13', sem: 1, name: '多元選修 I', credits: 2, cat: 'elective', passed: true },

    // === 高一下 (Sem 2) ===
    { id: 's2_1', sem: 2, name: '國語文 II', credits: 3, cat: 'required', passed: true },
    { id: 's2_2', sem: 2, name: '英語文 II', credits: 3, cat: 'required', passed: true },
    { id: 's2_3', sem: 2, name: '數學 II', credits: 4, cat: 'required', passed: true },
    { id: 's2_4', sem: 2, name: '歷史 II', credits: 2, cat: 'required', passed: true },
    { id: 's2_5', sem: 2, name: '地理 II', credits: 2, cat: 'required', passed: true },
    { id: 's2_6', sem: 2, name: '公民與社會 II', credits: 2, cat: 'required', passed: true },
    { id: 's2_7', sem: 2, name: '基礎生物', credits: 2, cat: 'required', passed: true },
    { id: 's2_8', sem: 2, name: '地球科學', credits: 2, cat: 'required', passed: true },
    { id: 's2_9', sem: 2, name: '體育 II', credits: 2, cat: 'required', passed: true },
    { id: 's2_10', sem: 2, name: '生活科技', credits: 2, cat: 'required', passed: true },
    { id: 's2_11', sem: 2, name: '音樂 / 美術', credits: 2, cat: 'required', passed: true },
    { id: 's2_12', sem: 2, name: '多元選修 II', credits: 2, cat: 'elective', passed: true },

    // === 高二上 (Sem 3) ===
    { id: 's3_1', sem: 3, name: '國語文 III', credits: 3, cat: 'required', passed: true },
    { id: 's3_2', sem: 3, name: '英語文 III', credits: 3, cat: 'required', passed: true },
    { id: 's3_3', sem: 3, name: '數學 A/B III', credits: 4, cat: 'required', passed: true },
    { id: 's3_4', sem: 3, name: '體育 III', credits: 2, cat: 'required', passed: true },
    { id: 's3_5', sem: 3, name: '探究與實作：自然', credits: 2, cat: 'elective', passed: true },
    { id: 's3_6', sem: 3, name: '選修物理/歷史 I', credits: 3, cat: 'elective', passed: true },
    { id: 's3_7', sem: 3, name: '藝術與生活', credits: 2, cat: 'required', passed: true },
    { id: 's3_8', sem: 3, name: '加深加廣選修 I', credits: 3, cat: 'elective', passed: true },
    { id: 's3_9', sem: 3, name: '校訂必修 II', credits: 2, cat: 'other', passed: true },

    // === 高二下 (Sem 4) ===
    { id: 's4_1', sem: 4, name: '國語文 IV', credits: 3, cat: 'required', passed: true },
    { id: 's4_2', sem: 4, name: '英語文 IV', credits: 3, cat: 'required', passed: true },
    { id: 's4_3', sem: 4, name: '數學 A/B IV', credits: 4, cat: 'required', passed: true },
    { id: 's4_4', sem: 4, name: '體育 IV', credits: 2, cat: 'required', passed: true },
    { id: 's4_5', sem: 4, name: '探究與實作：社會', credits: 2, cat: 'elective', passed: false },
    { id: 's4_6', sem: 4, name: '選修化學/地理 II', credits: 3, cat: 'elective', passed: false },
    { id: 's4_7', sem: 4, name: '健康與護理', credits: 1, cat: 'required', passed: true },
    { id: 's4_8', sem: 4, name: '加深加廣選修 II', credits: 3, cat: 'elective', passed: false },

    // === 高三上 (Sem 5) ===
    { id: 's5_1', sem: 5, name: '國語文選修 V', credits: 4, cat: 'elective', passed: false },
    { id: 's5_2', sem: 5, name: '英語文選修 V', credits: 4, cat: 'elective', passed: false },
    { id: 's5_3', sem: 5, name: '數甲/數乙選修 I', credits: 4, cat: 'elective', passed: false },
    { id: 's5_4', sem: 5, name: '專題探究 / 實作', credits: 3, cat: 'elective', passed: false },
    { id: 's5_5', sem: 5, name: '加深加廣選修 III', credits: 4, cat: 'elective', passed: false },
    { id: 's5_6', sem: 5, name: '體育 V', credits: 2, cat: 'required', passed: false },

    // === 高三下 (Sem 6) ===
    { id: 's6_1', sem: 6, name: '國語文選修 VI', credits: 4, cat: 'elective', passed: false },
    { id: 's6_2', sem: 6, name: '英語文選修 VI', credits: 4, cat: 'elective', passed: false },
    { id: 's6_3', sem: 6, name: '數甲/數乙選修 II', credits: 4, cat: 'elective', passed: false },
    { id: 's6_4', sem: 6, name: '自主學習成果專題', credits: 3, cat: 'other', passed: false },
    { id: 's6_5', sem: 6, name: '加深加廣選修 IV', credits: 4, cat: 'elective', passed: false },
    { id: 's6_6', sem: 6, name: '體育 VI', credits: 2, cat: 'required', passed: false },
  ]
};

// 狀態管理 State
let appState = {
  currentGrade: 2, // 高一:1, 高二:2, 高三:3
  activeSemTab: 3, // 1~6
  track: 'exp_science',
  theme: 'light',
  subjects: []
};

// 依據教育部《高級中等學校學生學習評量辦法》：
// 第一學期 (上學期)：八月一日至翌年一月三十一日 (8/1 ～ 1/31)
// 第二學期 (下學期)：二月一日至七月三十一日 (2/1 ～ 7/31)
function getAutoSemesterByDate(gradeNum) {
  const now = new Date();
  const month = now.getMonth() + 1; // 1 ~ 12
  const isFirstSemester = (month >= 8 || month === 1);

  if (gradeNum === 1) return isFirstSemester ? 1 : 2; // 高一上: 1, 高一下: 2
  if (gradeNum === 2) return isFirstSemester ? 3 : 4; // 高二上: 3, 高二下: 4
  if (gradeNum === 3) return isFirstSemester ? 5 : 6; // 高三上: 5, 高三下: 6
  return isFirstSemester ? 3 : 4;
}

// 初始化 App
document.addEventListener('DOMContentLoaded', () => {
  loadStateFromLocal();
  if (!appState.activeSemTab) {
    appState.activeSemTab = getAutoSemesterByDate(appState.currentGrade || 2);
  }
  initTheme();
  bindEvents();
  renderAll();
});

// 載入 LocalStorage
function loadStateFromLocal() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      appState = { ...DEFAULT_DATA, ...parsed };
    } catch (e) {
      console.error('LocalStorage parse error, using default:', e);
      appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  } else {
    appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveStateToLocal();
  }
}

// 儲存至 LocalStorage
function saveStateToLocal() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

// 初始化主題
function initTheme() {
  if (appState.theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById('themeToggleBtn').textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    document.getElementById('themeToggleBtn').textContent = '🌙';
  }
}

// 綁定事件監聽器
function bindEvents() {
  // 當前就讀年級 Selector
  const gradeSelect = document.getElementById('currentGradeSelect');
  if (gradeSelect) {
    gradeSelect.value = appState.currentGrade || 2;
    gradeSelect.addEventListener('change', (e) => {
      appState.currentGrade = parseInt(e.target.value, 10);
      appState.activeSemTab = getAutoSemesterByDate(appState.currentGrade);
      saveStateToLocal();
      renderAll();
    });
  }

  // 班別選擇 Selector
  const trackSelect = document.getElementById('trackSelect');
  if (trackSelect) {
    trackSelect.value = appState.track || 'exp_science';
    trackSelect.addEventListener('change', (e) => {
      appState.track = e.target.value;
      saveStateToLocal();
      renderAll();
    });
  }

  // 下方筆記本索引學期 Tab 切換 (Notebook index tabs)
  const semesterNav = document.getElementById('semesterNav');
  if (semesterNav) {
    semesterNav.addEventListener('click', (e) => {
      const btn = e.target.closest('.notebook-tab');
      if (btn) {
        const sem = parseInt(btn.dataset.sem, 10);
        appState.activeSemTab = sem;
        renderSemesterTabs();
        renderSubjectList();
      }
    });
  }

  // 切換暗黑主題
  document.getElementById('themeToggleBtn').addEventListener('click', () => {
    appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
    saveStateToLocal();
    initTheme();
  });

  // PNG 與 PDF 下載功能
  document.getElementById('exportPngBtn').addEventListener('click', exportPng);
  document.getElementById('exportPdfBtn').addEventListener('click', exportPdf);

  // 重置資料
  document.getElementById('resetDataBtn').addEventListener('click', handleResetData);
}

// 全局渲染中心
function renderAll() {
  renderDashboard();
  renderWarningCard();
  renderSemesterTabs();
  renderSubjectList();
}

// 1. 渲染固定即時 Dashboard 欄位
function renderDashboard() {
  let reqEarned = 0;
  let elecEarned = 0;
  let otherEarned = 0;

  appState.subjects.forEach(sub => {
    if (sub.passed) {
      if (sub.cat === 'required') reqEarned += sub.credits;
      else if (sub.cat === 'elective') elecEarned += sub.credits;
      else otherEarned += sub.credits;
    }
  });

  const totalEarned = reqEarned + elecEarned + otherEarned;

  document.getElementById('totalEarnedVal').textContent = totalEarned;
  document.getElementById('reqEarnedVal').textContent = reqEarned;
  document.getElementById('elecEarnedVal').textContent = elecEarned;
  document.getElementById('otherEarnedVal').textContent = otherEarned;

  const REQ_GOAL = 102;
  const ELEC_GOAL = 40;
  const TOTAL_GOAL = 150;

  const reqPct = Math.min(100, Math.round((reqEarned / REQ_GOAL) * 100));
  const elecPct = Math.min(100, Math.round((elecEarned / ELEC_GOAL) * 100));
  const otherPct = Math.min(100, Math.round((otherEarned / 20) * 100));

  document.getElementById('reqProgressFill').style.width = `${reqPct}%`;
  document.getElementById('elecProgressFill').style.width = `${elecPct}%`;
  document.getElementById('otherProgressFill').style.width = `${otherPct}%`;

  const shortageBadge = document.getElementById('dashShortageBadge');
  const remaining = TOTAL_GOAL - totalEarned;

  if (remaining <= 0 && reqEarned >= REQ_GOAL && elecEarned >= ELEC_GOAL) {
    shortageBadge.textContent = '🎉 達標！可順利畢業！';
    shortageBadge.className = 'badge-status achieved';
  } else if (remaining <= 0) {
    shortageBadge.textContent = '總學分達標，請留意必修需求';
    shortageBadge.className = 'badge-status';
  } else {
    shortageBadge.textContent = `還差 ${remaining} 學分`;
    shortageBadge.className = 'badge-status';
  }
}

// 2. 畢業學習預警計算演算法 (Graduation Warning System)
function renderWarningCard() {
  const currentSem = getAutoSemesterByDate(appState.currentGrade); // 1 ~ 6 依目前月份動態判定當前學期

  let earnedTotal = 0;
  let earnedRequired = 0;
  let earnedElective = 0;

  let futureMaxTotal = 0;
  let futureMaxRequired = 0;
  let futureMaxElective = 0;

  appState.subjects.forEach(sub => {
    if (sub.passed) {
      earnedTotal += sub.credits;
      if (sub.cat === 'required') earnedRequired += sub.credits;
      if (sub.cat === 'elective') earnedElective += sub.credits;
    }

    if (sub.sem >= currentSem) {
      futureMaxTotal += sub.credits;
      if (sub.cat === 'required') futureMaxRequired += sub.credits;
      if (sub.cat === 'elective') futureMaxElective += sub.credits;
    } else {
      if (sub.passed) {
        futureMaxTotal += sub.credits;
        if (sub.cat === 'required') futureMaxRequired += sub.credits;
        if (sub.cat === 'elective') futureMaxElective += sub.credits;
      }
    }
  });

  const card = document.getElementById('warningCard');
  const pill = document.getElementById('warningLevelPill');
  const summary = document.getElementById('warningCalcSummary');
  const message = document.getElementById('warningMessage');
  const details = document.getElementById('warningDetails');

  summary.textContent = `推估最高可得: ${futureMaxTotal} 學分`;

  const isAlreadyGraduated = earnedTotal >= 150 && earnedRequired >= 102 && earnedElective >= 40;
  const isTotalImpossible = futureMaxTotal < 150;
  const isReqImpossible = futureMaxRequired < 102;
  const margin = futureMaxTotal - 150;

  if (isAlreadyGraduated) {
    card.className = 'warning-card state-safe';
    pill.textContent = '🎓 達標恭喜';
    message.textContent = '恭喜！您目前的修習學分已完全滿足 108 課綱畢業門檻！🎉';
    details.textContent = '部定必修 ≥ 102、選修 ≥ 40，總學分 ≥ 150 皆全數解鎖成功！';
    triggerConfetti();
  } else if (isTotalImpossible || isReqImpossible) {
    card.className = 'warning-card state-danger';
    pill.textContent = '🔴 嚴重學分缺口警示';
    
    let dangerDesc = [];
    if (isTotalImpossible) dangerDesc.push(`推估最高僅能得 ${futureMaxTotal} 學分 (差 ${150 - futureMaxTotal} 分門檻)`);
    if (isReqImpossible) dangerDesc.push(`必修最高僅能得 ${futureMaxRequired} 學分 (差 ${102 - futureMaxRequired} 分門檻)`);
    
    message.textContent = '⚠️ 警告：依目前學期進度，就算後續科目全過也無法達成畢業門檻！';
    details.textContent = `建議處置：請盡快洽詢教務處安排【${dangerDesc.join(' 與 ')}】之補修或重修。`;
  } else if (margin < 10 || (futureMaxRequired - 102) < 4) {
    card.className = 'warning-card state-warning';
    pill.textContent = '🟡 畢業學分緊繃預警';
    message.textContent = '⚠️ 注意：您的畢業容錯學分較低，未來的課程幾乎不能有任何被當！';
    details.textContent = `推估總學分剩餘容錯空間僅 ${margin} 學分，請務必把握後續每個學期。`;
  } else {
    card.className = 'warning-card state-safe';
    pill.textContent = '🟢 進度正常 / 畢業安全';
    message.textContent = '進度非常理想！只要保持目前的學習步調與選修修習，就能順利畢業！✨';
    details.textContent = `當前就讀高${getSemText(currentSem)}，目前已取得 ${earnedTotal} 學分 (目標 150)。`;
  }
}

// 3. 渲染筆記本索引學期 Tabs
function renderSemesterTabs() {
  const container = document.getElementById('semesterNav');
  if (!container) return;
  const buttons = container.querySelectorAll('.notebook-tab');

  buttons.forEach(btn => {
    const sem = parseInt(btn.dataset.sem, 10);
    const semSubjects = appState.subjects.filter(s => s.sem === sem);
    const passedCount = semSubjects.filter(s => s.passed).length;
    const badge = document.getElementById(`semBadge${sem}`);
    if (badge) badge.textContent = `${passedCount}/${semSubjects.length}`;

    if (sem === appState.activeSemTab) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// 4. 渲染特定學期科目列表
function renderSubjectList() {
  const currentSem = appState.activeSemTab;
  const container = document.getElementById('subjectListContainer');
  const semTitle = document.getElementById('currentSemTitle');
  const semStats = document.getElementById('currentSemStats');

  semTitle.textContent = `${getSemText(currentSem)} 科目檢核`;

  const subjects = appState.subjects.filter(s => s.sem === currentSem);
  const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0);
  const passedCredits = subjects.filter(s => s.passed).reduce((sum, s) => sum + s.credits, 0);

  semStats.textContent = `已取得 ${passedCredits} / ${totalCredits} 學分 (${subjects.length} 個科目)`;

  if (subjects.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 40px 20px; color: var(--text-sub);">
        <p style="font-size:2rem; margin-bottom:8px;">📚</p>
        <p>此學期目前尚無科目設定。</p>
      </div>
    `;
    return;
  }

  container.innerHTML = subjects.map(sub => `
    <div class="subject-item ${sub.passed ? 'passed' : 'failed'}" data-id="${sub.id}">
      <div class="sub-info">
        <div class="sub-title-row">
          <span class="sub-name">${escapeHtml(sub.name)}</span>
        </div>
        <div class="sub-meta">
          <span class="tag-credit">${sub.credits} 學分</span>
          <span class="tag-cat ${sub.cat}">${getCatText(sub.cat)}</span>
        </div>
      </div>
      <div class="switch-wrapper">
        <label class="toggle-switch" aria-label="切換 ${escapeHtml(sub.name)} 學分取得狀態">
          <input type="checkbox" class="sub-toggle-checkbox" data-id="${sub.id}" ${sub.passed ? 'checked' : ''}>
          <span class="slider"></span>
        </label>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.sub-toggle-checkbox').forEach(chk => {
    chk.addEventListener('change', (e) => {
      const id = e.target.dataset.id;
      toggleSubjectPassed(id, e.target.checked);
    });
  });
}

// 切換科目通過狀態 (Toggle Pass/Fail)
function toggleSubjectPassed(id, passed) {
  const sub = appState.subjects.find(s => s.id === id);
  if (sub) {
    sub.passed = passed;
    saveStateToLocal();
    renderAll();
  }
}

// 重置資料
function handleResetData() {
  if (confirm('確定要將所有勾選紀錄重置為預設範本嗎？')) {
    appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveStateToLocal();
    renderAll();
    alert('已成功重置！');
  }
}

// 🖼️ 下載 PNG 功能 (html2canvas)
async function exportPng() {
  try {
    const target = document.querySelector('.app-container');
    const stickyWrapper = document.querySelector('.notebook-tabs-sticky-wrapper');
    
    if (stickyWrapper) stickyWrapper.style.position = 'relative';

    const canvas = await html2canvas(target, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#f6f8fd',
      logging: false
    });

    if (stickyWrapper) stickyWrapper.style.position = 'fixed';

    const link = document.createElement('a');
    link.download = `畢業啦_學分自我檢核表_${new Date().toISOString().slice(0,10)}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    alert('圖片匯出失敗：' + err.message);
  }
}

// 📄 下載 PDF 功能 (jsPDF + html2canvas)
async function exportPdf() {
  try {
    const target = document.querySelector('.app-container');
    const stickyWrapper = document.querySelector('.notebook-tabs-sticky-wrapper');

    if (stickyWrapper) stickyWrapper.style.position = 'relative';

    const canvas = await html2canvas(target, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false
    });

    if (stickyWrapper) stickyWrapper.style.position = 'fixed';

    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(`畢業啦_學分自我檢核表_${new Date().toISOString().slice(0,10)}.pdf`);
  } catch (err) {
    alert('PDF 匯出失敗：' + err.message);
  }
}

// Confetti 彩花特效
let confettiFired = false;
function triggerConfetti() {
  if (confettiFired) return;
  confettiFired = true;
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// Helper Utilities
function getSemText(sem) {
  const map = { 1: '高一上', 2: '高一下', 3: '高二上', 4: '高二下', 5: '高三上', 6: '高三下' };
  return map[sem] || '學期';
}

function getCatText(cat) {
  const map = { 'required': '部定必修', 'elective': '選修學分', 'other': '校訂與其他' };
  return map[cat] || '一般';
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
  });
}
