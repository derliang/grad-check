/* 畢業啦～ 🎓 臺南市私立聖功女中 113 學年度畢業學分檢核 App - 核心邏輯 (v28.0 最新規範資料庫) */

// 升級 Storage Key 以強制載入最新 113 全面優化版課程地圖
const STORAGE_KEY = 'grad_check_app_data_v113_sc_v28';

// 臺南市私立聖功女中 113 學年度最新官方結構資料庫
const ST_CATHERINE_113_FULL_DATABASE = {
  schemaVersion: "1.0",
  school: { code: "211304", name: "臺南市私立聖功女中" },
  cohortYear: 113,
  gradeOptions: [
    {
      grade: 1, label: "高一",
      classOptions: [
        { id: "grade1_general", label: "🏫 普通班" },
        { id: "grade1_exp_math_science", label: "🚀 數理實驗班" },
        { id: "grade1_exp_bilingual", label: "✨ 雙語實驗班" }
      ]
    },
    {
      grade: 2, label: "高二",
      classOptions: [
        { id: "grade2_general_science", label: "🔬 理組普通班" },
        { id: "grade2_general_humanities", label: "📚 文組普通班" },
        { id: "grade2_exp_math_science", label: "🚀 數理實驗班" },
        { id: "grade2_exp_bilingual", label: "✨ 雙語實驗班" }
      ]
    },
    {
      grade: 3, label: "高三",
      classOptions: [
        { id: "grade3_general_science", label: "🔬 理組普通班" },
        { id: "grade3_general_humanities", label: "📚 文組普通班" },
        { id: "grade3_exp_math_science", label: "🚀 數理實驗班" },
        { id: "grade3_exp_bilingual", label: "✨ 雙語實驗班" }
      ]
    }
  ],
  courseGroups: {
    grade1_general: {
      label: "高一普通班", grade: 1,
      semesters: {
        "1": {
          label: "高一上",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "閩南語文 (客語文／原住民族語文／閩東語文／臺灣手語)", credits: 1, cat: "required", mutuallyExclusive: true },
            { name: "英語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "數學", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "歷史", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "地理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "公民與社會", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "化學", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "生物", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "音樂", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生涯規劃", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "資訊科技", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "鄉土之愛與國際關懷-本土篇", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "多元選修 (補強-數學)", credits: 1, cat: "elective", mutuallyExclusive: true }
          ]
        },
        "2": {
          label: "高一下",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "閩南語文 (客語文／原住民族語文／閩東語文／臺灣手語)", credits: 1, cat: "required", mutuallyExclusive: true },
            { name: "英語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "數學", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "歷史", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "地理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "公民與社會", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "物理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "地球科學", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "音樂", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "資訊科技", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(一)-服務與思辨", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "鄉土之愛與國際關懷-國際篇", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "多元選修 (補強-數學)", credits: 1, cat: "elective", mutuallyExclusive: true }
          ]
        }
      }
    },
    grade1_exp_math_science: {
      label: "數理實驗班", grade: 1,
      semesters: {
        "1": {
          label: "高一上",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "閩南語文 (客語文／原住民族語文／閩東語文／臺灣手語)", credits: 1, cat: "required", mutuallyExclusive: true },
            { name: "英語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "數學", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "歷史", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "地理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "公民與社會", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "化學", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "生物", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "音樂", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生涯規劃", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "資訊科技", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "鄉土之愛與國際關懷-本土篇", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "數學與模型", credits: 2, cat: "elective", mutuallyExclusive: false }
          ]
        },
        "2": {
          label: "高一下",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "閩南語文 (客語文／原住民族語文／閩東語文／臺灣手語)", credits: 1, cat: "required", mutuallyExclusive: true },
            { name: "英語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "數學", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "歷史", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "地理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "公民與社會", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "物理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "地球科學", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "音樂", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "資訊科技", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(一)-服務與思辨", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "鄉土之愛與國際關懷-國際篇", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "科學研究與書寫", credits: 2, cat: "elective", mutuallyExclusive: false }
          ]
        }
      }
    },
    grade1_exp_bilingual: {
      label: "雙語實驗班", grade: 1,
      semesters: {
        "1": {
          label: "高一上",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "閩南語文 (客語文／原住民族語文／閩東語文／臺灣手語)", credits: 1, cat: "required", mutuallyExclusive: true },
            { name: "英語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "數學", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "歷史", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "地理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "公民與社會", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "化學", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "生物", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "音樂", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生涯規劃", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "資訊科技", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "多元選修 (補強-數學)", credits: 1, cat: "elective", mutuallyExclusive: true },
            { name: "在地文化與國際議題(I)", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        },
        "2": {
          label: "高一下",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "閩南語文 (客語文／原住民族語文／閩東語文／臺灣手語)", credits: 1, cat: "required", mutuallyExclusive: true },
            { name: "英語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "數學", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "歷史", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "地理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "公民與社會", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "物理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "地球科學", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "音樂", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "資訊科技", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(一)-服務與思辨", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "多元選修 (補強-數學)", credits: 1, cat: "elective", mutuallyExclusive: true },
            { name: "在地文化與國際議題(II)", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "科普專題", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        }
      }
    },
    grade2_general_science: {
      label: "理組普通班", grade: 2,
      semesters: {
        "3": {
          label: "高二上",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "英語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "數學A", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "歷史", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "公民與社會", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "化學", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "音樂", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生命教育", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生活科技", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "英文閱讀與寫作", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "選修物理-力學一", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "選修化學-物質與能量", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "選修生物-細胞與遺傳", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        },
        "4": {
          label: "高二下",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "英語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "數學A", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "地理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "物理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "音樂", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生活科技", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(二)-自我探索與發展", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "英文閱讀與寫作", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "選修物理-力學一", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "選修化學-物質與能量", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "選修生物-生命的起源與植物體的構造與功能", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "安全教育與傷害防護 (補強-物理＋補強-化學)", credits: 2, cat: "elective", mutuallyExclusive: true },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        }
      }
    },
    grade2_general_humanities: {
      label: "文組普通班", grade: 2,
      semesters: {
        "3": {
          label: "高二上",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "英語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "數學A(B)", credits: 4, cat: "required", mutuallyExclusive: true },
            { name: "歷史", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "公民與社會", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "地球科學", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "音樂", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生命教育", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生活科技", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "各類文學選讀", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "英文閱讀與寫作", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "探究與實作：地理與人文社會科學研究", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        },
        "4": {
          label: "高二下",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "英語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "數學A(B)", credits: 4, cat: "required", mutuallyExclusive: true },
            { name: "地理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "生物", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "音樂", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生活科技", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(二)-自我探索與發展", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "國學常識", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "英文閱讀與寫作", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "探究與實作：歷史學探究", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "探究與實作：公共議題與社會探究", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        }
      }
    },
    grade2_exp_math_science: {
      label: "數理實驗班", grade: 2,
      semesters: {
        "3": {
          label: "高二上",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "英語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "數學A", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "歷史", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "公民與社會", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "化學", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "音樂", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生命教育", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生活科技", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "英文閱讀與寫作", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "選修物理-力學一", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "選修化學-物質與能量", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "選修生物-細胞與遺傳", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "物理Cafe", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        },
        "4": {
          label: "高二下",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "英語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "數學A", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "地理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "物理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "音樂", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生活科技", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(二)-自我探索與發展", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "英文閱讀與寫作", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "選修物理-力學一", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "選修化學-物質與能量", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "選修生物-生命的起源與植物體的構造與功能", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "生物Buffet", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        }
      }
    },
    grade2_exp_bilingual: {
      label: "雙語實驗班", grade: 2,
      semesters: {
        "3": {
          label: "高二上",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "英語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "數學A(B)", credits: 4, cat: "required", mutuallyExclusive: true },
            { name: "歷史", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "公民與社會", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "地球科學", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "音樂", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生命教育", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生活科技", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "各類文學選讀", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "英文閱讀與寫作", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "探究與實作：地理與人文社會科學研究", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "市場行銷與設計", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        },
        "4": {
          label: "高二下",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "英語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "數學A(B)", credits: 4, cat: "required", mutuallyExclusive: true },
            { name: "地理", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "生物", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "音樂", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "生活科技", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(二)-自我探索與發展", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "國學常識", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "英文閱讀與寫作", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "探究與實作：歷史學探究", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "人權足跡", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        }
      }
    },
    grade3_general_science: {
      label: "理組普通班", grade: 3,
      semesters: {
        "5": {
          label: "高三上",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "英語文", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "家政", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "健康與護理", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "全民國防教育", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(三)-人際溝通與關係經營", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "英文作文 (第二外國語文)", credits: 2, cat: "elective", mutuallyExclusive: true },
            { name: "數學甲", credits: 4, cat: "elective", mutuallyExclusive: false },
            { name: "選修物理-力學二與熱學", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修物理-波動、光及聲音", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修化學-物質構造與反應速率", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修化學-化學反應與平衡一", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修生物-生態、演化及生物多樣性 (領域課程：科技應用專題)", credits: 2, cat: "elective", mutuallyExclusive: true },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        },
        "6": {
          label: "高三下",
          courses: [
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "藝術生活", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "家政", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "健康與護理", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "全民國防教育", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(四)-表達力與領導力", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "語文表達與傳播應用", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "專題閱讀與研究", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "英語聽講 (第二外國語文)", credits: 2, cat: "elective", mutuallyExclusive: true },
            { name: "數學甲", credits: 4, cat: "elective", mutuallyExclusive: false },
            { name: "選修物理-電磁現象一", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修物理-電磁現象二與量子現象", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修化學-化學反應與平衡二", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修化學-有機化學與應用科技", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修生物-動物體的構造與功能 (進階程式設計／健康與休閒生活)", credits: 2, cat: "elective", mutuallyExclusive: true },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        }
      }
    },
    grade3_general_humanities: {
      label: "文組普通班", grade: 3,
      semesters: {
        "5": {
          label: "高三上",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "英語文", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "家政", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "健康與護理", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "全民國防教育", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(三)-人際溝通與關係經營", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "英文作文", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "數學乙", credits: 4, cat: "elective", mutuallyExclusive: false },
            { name: "族群、性別與國家的歷史", credits: 3, cat: "elective", mutuallyExclusive: false },
            { name: "社會環境議題", credits: 3, cat: "elective", mutuallyExclusive: false },
            { name: "現代社會與經濟", credits: 3, cat: "elective", mutuallyExclusive: false },
            { name: "基本設計", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        },
        "6": {
          label: "高三下",
          courses: [
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "藝術生活", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "家政", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "健康與護理", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "全民國防教育", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(四)-表達力與領導力", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "語文表達與傳播應用", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "專題閱讀與研究 (閩南語文口語溝通與表達)", credits: 2, cat: "elective", mutuallyExclusive: true },
            { name: "英語聽講", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "數學乙 (第二外國語文／學群選修)", credits: 4, cat: "elective", mutuallyExclusive: true },
            { name: "科技、環境與藝術的歷史", credits: 3, cat: "elective", mutuallyExclusive: false },
            { name: "空間資訊科技", credits: 3, cat: "elective", mutuallyExclusive: false },
            { name: "民主政治與法律", credits: 3, cat: "elective", mutuallyExclusive: false },
            { name: "新媒體藝術", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        }
      }
    },
    grade3_exp_math_science: {
      label: "數理實驗班", grade: 3,
      semesters: {
        "5": {
          label: "高三上",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "英語文", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "家政", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "健康與護理", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "全民國防教育", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(三)-人際溝通與關係經營", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "英文作文 (第二外國語文)", credits: 2, cat: "elective", mutuallyExclusive: true },
            { name: "數學甲", credits: 4, cat: "elective", mutuallyExclusive: false },
            { name: "選修物理-力學二與熱學", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修物理-波動、光及聲音", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修化學-物質構造與反應速率", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修化學-化學反應與平衡一", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修生物-生態、演化及生物多樣性 (領域課程：科技應用專題)", credits: 2, cat: "elective", mutuallyExclusive: true },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        },
        "6": {
          label: "高三下",
          courses: [
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "藝術生活", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "家政", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "健康與護理", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "全民國防教育", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(四)-表達力與領導力", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "語文表達與傳播應用", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "專題閱讀與研究", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "英語聽講 (第二外國語文)", credits: 2, cat: "elective", mutuallyExclusive: true },
            { name: "數學甲", credits: 4, cat: "elective", mutuallyExclusive: false },
            { name: "選修物理-電磁現象一", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修物理-電磁現象二與量子現象", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修化學-化學反應與平衡二", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修化學-有機化學與應用科技", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "選修生物-動物體的構造與功能 (進階程式設計／健康與休閒生活)", credits: 2, cat: "elective", mutuallyExclusive: true },
            { name: "化學SPA", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        }
      }
    },
    grade3_exp_bilingual: {
      label: "雙語實驗班", grade: 3,
      semesters: {
        "5": {
          label: "高三上",
          courses: [
            { name: "國語文", credits: 4, cat: "required", mutuallyExclusive: false },
            { name: "英語文", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "家政", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "健康與護理", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "全民國防教育", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(三)-人際溝通與關係經營", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "英文作文", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "數學乙", credits: 4, cat: "elective", mutuallyExclusive: false },
            { name: "族群、性別與國家的歷史", credits: 3, cat: "elective", mutuallyExclusive: false },
            { name: "社會環境議題", credits: 3, cat: "elective", mutuallyExclusive: false },
            { name: "現代社會與經濟", credits: 3, cat: "elective", mutuallyExclusive: false },
            { name: "創意思考與設計", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "多元選修", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        },
        "6": {
          label: "高三下",
          courses: [
            { name: "美術", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "藝術生活", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "家政", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "健康與護理", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "體育", credits: 2, cat: "required", mutuallyExclusive: false },
            { name: "全民國防教育", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "靈智教育(四)-表達力與領導力", credits: 1, cat: "required", mutuallyExclusive: false },
            { name: "語文表達與傳播應用", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "專題閱讀與研究 (閩南語文口語溝通與表達)", credits: 2, cat: "elective", mutuallyExclusive: true },
            { name: "英語聽講", credits: 2, cat: "elective", mutuallyExclusive: false },
            { name: "數學乙 (第二外國語文／學群選修)", credits: 4, cat: "elective", mutuallyExclusive: true },
            { name: "科技、環境與藝術的歷史", credits: 3, cat: "elective", mutuallyExclusive: false },
            { name: "空間資訊科技", credits: 3, cat: "elective", mutuallyExclusive: false },
            { name: "民主政治與法律", credits: 3, cat: "elective", mutuallyExclusive: false },
            { name: "新媒體藝術", credits: 1, cat: "elective", mutuallyExclusive: false },
            { name: "全球議題秀-心跳的聲音", credits: 1, cat: "elective", mutuallyExclusive: false }
          ]
        }
      }
    }
  }
};

// 將全班群 6 個學期完整課程集成為全量 Subjects 庫
function buildFullSubjectDatabase() {
  const allSubjects = [];
  const groupKeys = Object.keys(ST_CATHERINE_113_FULL_DATABASE.courseGroups);

  groupKeys.forEach(groupKey => {
    const groupObj = ST_CATHERINE_113_FULL_DATABASE.courseGroups[groupKey];
    const semKeys = Object.keys(groupObj.semesters);

    semKeys.forEach(semStr => {
      const semNum = parseInt(semStr, 10);
      const semData = groupObj.semesters[semStr];
      const courseList = semData.courses || [];

      courseList.forEach((c, idx) => {
        allSubjects.push({
          id: `sc113_${groupKey}_s${semNum}_${idx}`,
          groupKey: groupKey,
          sem: semNum,
          name: c.name,
          credits: c.credits,
          cat: c.cat,
          mutuallyExclusive: c.mutuallyExclusive || false,
          passed: semNum === 1 // 預設高一上及格
        });
      });
    });
  });

  return allSubjects;
}

const DEFAULT_DATA = {
  currentGrade: 1,
  track: 'grade1_general',
  theme: 'light',
  subjects: buildFullSubjectDatabase()
};

let appState = {
  currentGrade: 1,
  activeSemTab: 1,
  track: 'grade1_general',
  theme: 'light',
  subjects: []
};

const dom = {};

function getAutoSemesterByDate(gradeNum) {
  const now = new Date();
  const month = now.getMonth() + 1;
  const isFirstSemester = (month >= 8 || month === 1);

  if (gradeNum === 1) return isFirstSemester ? 1 : 2;
  if (gradeNum === 2) return isFirstSemester ? 3 : 4;
  if (gradeNum === 3) return isFirstSemester ? 5 : 6;
  return isFirstSemester ? 1 : 2;
}

document.addEventListener('DOMContentLoaded', () => {
  cacheDomElements();
  loadStateFromLocal();
  
  if (!appState.activeSemTab) {
    appState.activeSemTab = getAutoSemesterByDate(appState.currentGrade || 1);
  }

  renderTrackOptions();
  initTheme();
  bindEvents();
  renderAll();
});

function cacheDomElements() {
  dom.totalEarnedVal = document.getElementById('totalEarnedVal');
  dom.reqEarnedVal = document.getElementById('reqEarnedVal');
  dom.elecEarnedVal = document.getElementById('elecEarnedVal');
  dom.otherEarnedVal = document.getElementById('otherEarnedVal');

  dom.reqProgressFill = document.getElementById('reqProgressFill');
  dom.elecProgressFill = document.getElementById('elecProgressFill');
  dom.otherProgressFill = document.getElementById('otherProgressFill');

  dom.dashShortageBadge = document.getElementById('dashShortageBadge');

  dom.warningCard = document.getElementById('warningCard');
  dom.warningLevelPill = document.getElementById('warningLevelPill');
  dom.warningCalcSummary = document.getElementById('warningCalcSummary');
  dom.warningMessage = document.getElementById('warningMessage');
  dom.warningDetails = document.getElementById('warningDetails');

  dom.currentSemTitle = document.getElementById('currentSemTitle');
  dom.currentSemStats = document.getElementById('currentSemStats');
  dom.semLockNotice = document.getElementById('semLockNotice');
  dom.subjectListContainer = document.getElementById('subjectListContainer');
  dom.semesterNav = document.getElementById('semesterNav');

  dom.currentGradeSelect = document.getElementById('currentGradeSelect');
  dom.trackSelect = document.getElementById('trackSelect');
  dom.themeToggleBtn = document.getElementById('themeToggleBtn');
  dom.exportPngBtn = document.getElementById('exportPngBtn');
  dom.exportPdfBtn = document.getElementById('exportPdfBtn');
  dom.resetDataBtn = document.getElementById('resetDataBtn');
  dom.exportReportWrapper = document.getElementById('exportReportWrapper');
}

function loadStateFromLocal() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      appState = { ...DEFAULT_DATA, ...parsed };
      
      if (!Array.isArray(appState.subjects) || appState.subjects.length === 0 || !appState.subjects[0].groupKey) {
        appState.subjects = buildFullSubjectDatabase();
      } else {
        appState.subjects.forEach(sub => {
          if (typeof sub.passed !== 'boolean') sub.passed = false;
          if (typeof sub.credits !== 'number') sub.credits = 2;
          if (!['required', 'elective', 'other'].includes(sub.cat)) sub.cat = 'other';
        });
      }
    } catch (e) {
      console.error('LocalStorage 讀取失敗，還原至預設設定:', e);
      appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  } else {
    appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveStateToLocal();
  }
}

function saveStateToLocal() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (e) {
    console.error('LocalStorage 儲存失敗:', e);
  }
}

function initTheme() {
  if (appState.theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (dom.themeToggleBtn) dom.themeToggleBtn.textContent = '☀️';
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (dom.themeToggleBtn) dom.themeToggleBtn.textContent = '🌙';
  }
}

function renderTrackOptions() {
  if (!dom.trackSelect) return;

  const currentGrade = appState.currentGrade || 1;
  const gradeObj = ST_CATHERINE_113_FULL_DATABASE.gradeOptions.find(g => g.grade === currentGrade);
  const options = gradeObj ? gradeObj.classOptions : ST_CATHERINE_113_FULL_DATABASE.gradeOptions[0].classOptions;

  dom.trackSelect.innerHTML = options.map(opt => `
    <option value="${opt.id}">${opt.label}</option>
  `).join('');

  const isValidTrack = options.some(opt => opt.id === appState.track);
  if (!isValidTrack) {
    appState.track = options[0].id;
  }
  dom.trackSelect.value = appState.track;
}

// 動態對映當前年級與班別在 JSON 資料庫中的 groupKey 集合
function getFilteredTrackSubjects() {
  const currentTrack = appState.track || 'grade1_general';

  return appState.subjects.filter(sub => {
    const sem = sub.sem;
    const gKey = sub.groupKey;

    if (sem === 1 || sem === 2) {
      if (currentTrack.startsWith('grade1_')) return gKey === currentTrack;
      if (currentTrack.includes('bilingual')) return gKey === 'grade1_exp_bilingual';
      if (currentTrack.includes('math_science')) return gKey === 'grade1_exp_math_science';
      return gKey === 'grade1_general';
    } else if (sem === 3 || sem === 4) {
      if (currentTrack.startsWith('grade2_')) return gKey === currentTrack;
      if (currentTrack.includes('humanities')) return gKey === 'grade2_general_humanities';
      if (currentTrack.includes('bilingual')) return gKey === 'grade2_exp_bilingual';
      if (currentTrack.includes('math_science')) return gKey === 'grade2_exp_math_science';
      return gKey === 'grade2_general_science';
    } else { // sem 5, 6
      if (currentTrack.startsWith('grade3_')) return gKey === currentTrack;
      if (currentTrack.includes('humanities')) return gKey === 'grade3_general_humanities';
      if (currentTrack.includes('bilingual')) return gKey === 'grade3_exp_bilingual';
      if (currentTrack.includes('math_science')) return gKey === 'grade3_exp_math_science';
      return gKey === 'grade3_general_science';
    }
  });
}

function bindEvents() {
  if (dom.currentGradeSelect) {
    dom.currentGradeSelect.value = appState.currentGrade || 1;
    dom.currentGradeSelect.addEventListener('change', (e) => {
      appState.currentGrade = parseInt(e.target.value, 10);
      appState.activeSemTab = getAutoSemesterByDate(appState.currentGrade);
      renderTrackOptions();
      saveStateToLocal();
      renderAll();
    });
  }

  if (dom.trackSelect) {
    dom.trackSelect.addEventListener('change', (e) => {
      appState.track = e.target.value;
      saveStateToLocal();
      renderAll();
    });
  }

  if (dom.semesterNav) {
    dom.semesterNav.addEventListener('click', (e) => {
      const btn = e.target.closest('.notebook-tab');
      if (btn) {
        const sem = parseInt(btn.dataset.sem, 10);
        if (appState.activeSemTab !== sem) {
          appState.activeSemTab = sem;
          renderSemesterTabs();
          renderSubjectList();
        }
      }
    });
  }

  if (dom.subjectListContainer) {
    dom.subjectListContainer.addEventListener('change', (e) => {
      if (e.target.classList.contains('sub-toggle-checkbox')) {
        const id = e.target.dataset.id;
        toggleSubjectPassed(id, e.target.checked);
      }
    });
  }

  if (dom.themeToggleBtn) {
    dom.themeToggleBtn.addEventListener('click', () => {
      appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
      saveStateToLocal();
      initTheme();
    });
  }

  if (dom.exportPngBtn) dom.exportPngBtn.addEventListener('click', exportPngReport);
  if (dom.exportPdfBtn) dom.exportPdfBtn.addEventListener('click', exportPdfReport);
  if (dom.resetDataBtn) dom.resetDataBtn.addEventListener('click', handleResetData);
}

function renderAll() {
  renderDashboard();
  renderWarningCard();
  renderSemesterTabs();
  renderSubjectList();
}

function renderDashboard() {
  let rawCompulsoryEarned = 0;
  let rawElectiveEarned = 0;
  let rawOtherEarned = 0;

  const validSubjects = getFilteredTrackSubjects();

  validSubjects.forEach(sub => {
    if (sub.passed) {
      if (sub.cat === 'required') rawCompulsoryEarned += sub.credits;
      else if (sub.cat === 'elective') rawElectiveEarned += sub.credits;
      else rawOtherEarned += sub.credits;
    }
  });

  const reqEarned = Math.min(102, rawCompulsoryEarned);
  const overflowCompulsory = Math.max(0, rawCompulsoryEarned - 102);

  const elecEarned = Math.min(40, rawElectiveEarned);
  const overflowElective = Math.max(0, rawElectiveEarned - 40);

  const otherEarned = rawOtherEarned + overflowCompulsory + overflowElective;
  const totalEarned = rawCompulsoryEarned + rawElectiveEarned + rawOtherEarned;

  if (dom.totalEarnedVal) dom.totalEarnedVal.textContent = totalEarned;
  if (dom.reqEarnedVal) dom.reqEarnedVal.textContent = reqEarned;
  if (dom.elecEarnedVal) dom.elecEarnedVal.textContent = elecEarned;
  if (dom.otherEarnedVal) dom.otherEarnedVal.textContent = otherEarned;

  const REQ_GOAL = 102;
  const ELEC_GOAL = 40;
  const TOTAL_GOAL = 150;

  const reqPct = Math.min(100, Math.round((reqEarned / REQ_GOAL) * 100));
  const elecPct = Math.min(100, Math.round((elecEarned / ELEC_GOAL) * 100));
  const otherPct = Math.min(100, Math.round((otherEarned / 8) * 100));

  if (dom.reqProgressFill) dom.reqProgressFill.style.width = `${reqPct}%`;
  if (dom.elecProgressFill) dom.elecProgressFill.style.width = `${elecPct}%`;
  if (dom.otherProgressFill) dom.otherProgressFill.style.width = `${otherPct}%`;

  if (dom.dashShortageBadge) {
    const remaining = TOTAL_GOAL - totalEarned;
    if (remaining <= 0 && reqEarned >= REQ_GOAL && elecEarned >= ELEC_GOAL) {
      dom.dashShortageBadge.textContent = '🎉 達標！可順利畢業！';
      dom.dashShortageBadge.className = 'badge-status achieved';
    } else if (remaining <= 0) {
      dom.dashShortageBadge.textContent = '總學分達標，請留意必修需求';
      dom.dashShortageBadge.className = 'badge-status';
    } else {
      dom.dashShortageBadge.textContent = `還差 ${remaining} 學分`;
      dom.dashShortageBadge.className = 'badge-status';
    }
  }
}

function renderWarningCard() {
  if (!dom.warningCard) return;

  const currentSem = getAutoSemesterByDate(appState.currentGrade);

  if (appState.currentGrade === 1 && currentSem === 1) {
    dom.warningCard.className = 'warning-card state-fresh';
    if (dom.warningLevelPill) dom.warningLevelPill.textContent = '🌱 學習啟航';
    if (dom.warningCalcSummary) dom.warningCalcSummary.textContent = '課程地圖建置完畢';
    if (dom.warningMessage) dom.warningMessage.textContent = '歡迎來到聖功女中！本學期預計修習 31 學分，勾選通過科目即可掌握畢業進度！';
    if (dom.warningDetails) dom.warningDetails.textContent = '目標指引：三年修滿 150 學分 (必修 102、選修 40)，一起加油！✨';
    return;
  }

  let pastTotalCredits = 0;
  let pastPassedCredits = 0;

  let earnedTotal = 0;
  let earnedRequired = 0;
  let earnedElective = 0;

  let futureMaxTotal = 0;
  const validSubjects = getFilteredTrackSubjects();

  validSubjects.forEach(sub => {
    if (sub.passed) {
      earnedTotal += sub.credits;
      if (sub.cat === 'required') earnedRequired += sub.credits;
      if (sub.cat === 'elective') earnedElective += sub.credits;
    }

    if (sub.sem < currentSem) {
      pastTotalCredits += sub.credits;
      if (sub.passed) pastPassedCredits += sub.credits;
    }

    if (sub.sem >= currentSem) {
      futureMaxTotal += sub.credits;
    } else {
      if (sub.passed) futureMaxTotal += sub.credits;
    }
  });

  if (dom.warningCalcSummary) dom.warningCalcSummary.textContent = `推估最高可得: ${futureMaxTotal} 學分`;

  const isAlreadyGraduated = earnedTotal >= 150 && earnedRequired >= 102 && earnedElective >= 40;
  if (isAlreadyGraduated) {
    dom.warningCard.className = 'warning-card state-safe';
    if (dom.warningLevelPill) dom.warningLevelPill.textContent = '🎓 達標恭喜';
    if (dom.warningMessage) dom.warningMessage.textContent = '恭喜！您目前的修習學分已完全滿足 108 課綱畢業門檻！🎉';
    if (dom.warningDetails) dom.warningDetails.textContent = '必修 ≥ 102、選修 ≥ 40，總學分 ≥ 150 皆全數解鎖成功！';
    triggerConfetti();
    return;
  }

  if (futureMaxTotal < 150) {
    dom.warningCard.className = 'warning-card state-danger';
    if (dom.warningLevelPill) dom.warningLevelPill.textContent = '🔴 嚴重學分缺口警示';
    if (dom.warningMessage) dom.warningMessage.textContent = '⚠️ 警告：依目前學期進度，就算後續科目全過也無法達成 150 畢業門檻！';
    if (dom.warningDetails) dom.warningDetails.textContent = `建議處置：目前推估最高僅能得 ${futureMaxTotal} 學分 (缺 ${150 - futureMaxTotal} 分)，請盡快洽詢教務處補修。`;
    return;
  }

  const passRate = pastTotalCredits > 0 ? (pastPassedCredits / pastTotalCredits) : 1;
  const passPct = Math.round(passRate * 100);

  if (passRate >= 0.90) {
    dom.warningCard.className = 'warning-card state-safe';
    if (dom.warningLevelPill) dom.warningLevelPill.textContent = '🟢 學習趨勢優秀';
    if (dom.warningMessage) dom.warningMessage.textContent = `表現非常理想！依過往 ${passPct}% 的高過關率推估，預計能輕鬆順利畢業！✨`;
    if (dom.warningDetails) dom.warningDetails.textContent = `當前就讀高${getSemText(currentSem)}，目前已取得 ${earnedTotal} 學分 (目標 150)。`;
  } else if (passRate >= 0.75) {
    dom.warningCard.className = 'warning-card state-warning';
    if (dom.warningLevelPill) dom.warningLevelPill.textContent = '🟡 學習穩健提醒';
    if (dom.warningMessage) dom.warningMessage.textContent = `學習狀態穩健 (過關率 ${passPct}%)，建議保持節奏並注意核心必修科目！`;
    if (dom.warningDetails) dom.warningDetails.textContent = `目前已取得 ${earnedTotal} 學分，請持續關注各科修習狀況。`;
  } else {
    dom.warningCard.className = 'warning-card state-warning';
    if (dom.warningLevelPill) dom.warningLevelPill.textContent = '🧡 趨勢警惕提醒';
    if (dom.warningMessage) dom.warningMessage.textContent = `⚠️ 趨勢提醒：依前幾學期過關率 (${passPct}%) 推估，畢業學分稍緊繃！`;
    if (dom.warningDetails) dom.warningDetails.textContent = '建議本學期把握每個必修與選修科目，避免學分缺口擴大。';
  }
}

function renderSemesterTabs() {
  if (!dom.semesterNav) return;
  const buttons = dom.semesterNav.querySelectorAll('.notebook-tab');
  const validSubjects = getFilteredTrackSubjects();

  buttons.forEach(btn => {
    const sem = parseInt(btn.dataset.sem, 10);
    const semSubjects = validSubjects.filter(s => s.sem === sem);
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

// 4. 渲染特定學期科目列表 (含年級防呆鎖定、必修/選修分區呈現、互斥二選一標籤)
function renderSubjectList() {
  if (!dom.subjectListContainer) return;

  const currentSem = appState.activeSemTab;
  const currentGrade = appState.currentGrade || 1;
  const maxUnlockedSem = currentGrade * 2;
  const isLocked = currentSem > maxUnlockedSem;

  if (dom.currentSemTitle) dom.currentSemTitle.textContent = `${getSemText(currentSem)} 取得學分檢核`;

  if (dom.semLockNotice) {
    dom.semLockNotice.style.display = isLocked ? 'flex' : 'none';
  }

  const validSubjects = getFilteredTrackSubjects();
  const subjects = sortSubjects(validSubjects.filter(s => s.sem === currentSem));
  const totalCredits = subjects.reduce((sum, s) => sum + s.credits, 0);
  const passedCredits = subjects.filter(s => s.passed).reduce((sum, s) => sum + s.credits, 0);

  const pct = totalCredits > 0 ? Math.round((passedCredits / totalCredits) * 100) : 0;

  if (dom.currentSemStats) {
    if (pct === 100 && totalCredits > 0) {
      dom.currentSemStats.innerHTML = `<span style="color:#00b894; font-weight:800;">🎉 已取得 100%</span> (${passedCredits}/${totalCredits} 學分, ${subjects.length}個科目)`;
    } else {
      dom.currentSemStats.textContent = `已取得 ${pct}% (${passedCredits}/${totalCredits} 學分, ${subjects.length}個科目)`;
    }
  }

  if (subjects.length === 0) {
    dom.subjectListContainer.innerHTML = `
      <div style="text-align:center; padding: 40px 20px; color: var(--text-sub);">
        <p style="font-size:2rem; margin-bottom:8px;">📚</p>
        <p>此學期目前尚無科目設定。</p>
      </div>
    `;
    return;
  }

  const commonSubjects = subjects.filter(s => s.cat === 'required');
  const trackSubjects = subjects.filter(s => s.cat !== 'required');

  let html = '';

  if (trackSubjects.length > 0 && currentSem > 2) {
    if (commonSubjects.length > 0) {
      html += `<div class="section-divider-title">🏛️ 部定與校訂必修科目</div>`;
      html += renderSubjectCards(commonSubjects, isLocked);
    }
    html += `<div class="section-divider-title track-section">🔀 班別專屬選修與分流科目</div>`;
    html += renderSubjectCards(trackSubjects, isLocked);
  } else {
    html = renderSubjectCards(subjects, isLocked);
  }

  dom.subjectListContainer.innerHTML = html;
}

function renderSubjectCards(subjectArray, isLocked) {
  return subjectArray.map(sub => `
    <div class="subject-item ${sub.passed ? 'passed' : 'failed'}" data-id="${sub.id}">
      <div class="sub-inline-row">
        <span class="sub-name">${escapeHtml(sub.name)}</span>
        <span class="tag-credit">${sub.credits}學分</span>
        <span class="tag-cat ${sub.cat}">${getCatText(sub.cat)}</span>
        ${sub.mutuallyExclusive ? '<span class="tag-exclusive" title="同一時段開設，擇一修讀">🔀 跑班二選一</span>' : ''}
      </div>
      <div class="switch-wrapper">
        <label class="toggle-switch ${isLocked ? 'disabled' : ''}" aria-label="切換 ${escapeHtml(sub.name)} 學分取得狀態">
          <input type="checkbox" class="sub-toggle-checkbox" data-id="${sub.id}" ${sub.passed ? 'checked' : ''} ${isLocked ? 'disabled' : ''}>
          <span class="slider"></span>
        </label>
      </div>
    </div>
  `).join('');
}

function sortSubjects(subjects) {
  const catPriority = { 'required': 1, 'elective': 2, 'other': 3 };
  const academicKeywords = ['國', '英', '數', '史', '地', '公', '社', '物', '化', '生', '地科', '資', '專題', '探究', '電腦'];

  return [...subjects].sort((a, b) => {
    const catA = catPriority[a.cat] || 9;
    const catB = catPriority[b.cat] || 9;
    if (catA !== catB) return catA - catB;

    const isAcadA = academicKeywords.some(k => a.name.includes(k)) ? 1 : 2;
    const isAcadB = academicKeywords.some(k => b.name.includes(k)) ? 1 : 2;
    if (isAcadA !== isAcadB) return isAcadA - isAcadB;

    return 0;
  });
}

function toggleSubjectPassed(id, passed) {
  const sub = appState.subjects.find(s => s.id === id);
  if (sub) {
    sub.passed = passed;
    saveStateToLocal();
    renderAll();
  }
}

function handleResetData() {
  if (confirm('⚠️ 警告：確定要重置所有勾選紀錄嗎？\n\n此操作將會清空您目前所有學分數據並恢復為初始預設值，此動作無法復原。')) {
    appState = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveStateToLocal();
    renderAll();
    alert('已成功重置所有學分紀錄！');
  }
}

function generateFullReportHtml() {
  const gradeText = { 1: '高一', 2: '高二', 3: '高三' }[appState.currentGrade] || '高一';
  const currentTrack = appState.track || 'grade1_general';
  const trackLabelMap = {
    grade1_general: '🏫 高一普通班',
    grade1_exp_math_science: '🚀 高一數理實驗班',
    grade1_exp_bilingual: '✨ 高一雙語實驗班',
    grade2_general_science: '🔬 理組普通班',
    grade2_general_humanities: '📚 文組普通班',
    grade2_exp_math_science: '🚀 數理實驗班',
    grade2_exp_bilingual: '✨ 雙語實驗班',
    grade3_general_science: '🔬 理組普通班',
    grade3_general_humanities: '📚 文組普通班',
    grade3_exp_math_science: '🚀 數理實驗班',
    grade3_exp_bilingual: '✨ 雙語實驗班'
  };
  const trackText = trackLabelMap[currentTrack] || '普通班';
  const todayStr = new Date().toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' });

  const validSubjects = getFilteredTrackSubjects();

  let rawComp = 0, rawElec = 0, rawOther = 0;
  validSubjects.forEach(s => {
    if (s.passed) {
      if (s.cat === 'required') rawComp += s.credits;
      else if (s.cat === 'elective') rawElec += s.credits;
      else rawOther += s.credits;
    }
  });

  const reqEarned = Math.min(102, rawComp);
  const elecEarned = Math.min(40, rawElec);
  const otherEarned = rawOther + Math.max(0, rawComp - 102) + Math.max(0, rawElec - 40);
  const totalEarned = rawComp + rawElec + rawOther;

  let matrixHtml = '';
  for (let sem = 1; sem <= 6; sem++) {
    const semName = getSemText(sem);
    const semSubjects = sortSubjects(validSubjects.filter(s => s.sem === sem));
    const semTotal = semSubjects.reduce((a, b) => a + b.credits, 0);
    const semPassed = semSubjects.filter(s => s.passed).reduce((a, b) => a + b.credits, 0);

    matrixHtml += `
      <div class="sem-matrix-box" data-sem="${sem}">
        <div class="sem-matrix-title">
          <span>📅 ${semName}</span>
          <span>${semPassed} / ${semTotal} 學分</span>
        </div>
        <table class="sem-matrix-table">
          <tbody>
            ${semSubjects.map(s => `
              <tr>
                <td style="width:55%;"><strong>${escapeHtml(s.name)}</strong></td>
                <td style="width:20%; text-align:center;">${s.credits}學分</td>
                <td style="width:25%; text-align:right;">
                  ${s.passed ? '<span class="badge-passed">✅ 及格</span>' : '<span class="badge-unpassed">⚪ 未過</span>'}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  return `
    <div class="export-report-document">
      <div class="rpt-header-box">
        <h2 class="rpt-main-title">🎓 臺南市私立聖功女中 113 學年度畢業學分自我檢核審查報告書</h2>
        <div class="rpt-meta-row">
          <span>🎒 <strong>我的年級：</strong> ${gradeText}</span>
          <span>🏫 <strong>我的班別：</strong> ${trackText}</span>
          <span>📅 <strong>產出日期：</strong> ${todayStr}</span>
        </div>
      </div>

      <div class="rpt-dash-summary">
        <div class="rpt-dash-card card-main">
          <span class="rpt-dash-title">累積總學分</span>
          <span class="rpt-dash-val">${totalEarned} / 150</span>
        </div>
        <div class="rpt-dash-card">
          <span class="rpt-dash-title">必修</span>
          <span class="rpt-dash-val">${reqEarned} / 102</span>
        </div>
        <div class="rpt-dash-card">
          <span class="rpt-dash-title">選修</span>
          <span class="rpt-dash-val">${elecEarned} / 40</span>
        </div>
        <div class="rpt-dash-card">
          <span class="rpt-dash-title">其他必選修</span>
          <span class="rpt-dash-val">${otherEarned} 學分</span>
        </div>
      </div>

      <div class="rpt-warning-card ${totalEarned >= 150 && reqEarned >= 102 && elecEarned >= 40 ? 'state-safe' : 'state-warning'}">
        📊 <strong>修習進度評估：</strong> ${totalEarned >= 150 && reqEarned >= 102 && elecEarned >= 40 ? '🎉 恭喜已全數滿足 108 課綱畢業門檻！' : `目前累積 ${totalEarned} 學分，距離 150 總學分還差 ${Math.max(0, 150 - totalEarned)} 學分，請持續努力。`}
      </div>

      <h3 class="rpt-section-title" style="font-size:1.05rem; font-weight:900; margin-bottom:12px; color:#2d3436;">📚 113 學年度三年 6 個學期完整課程地圖與修習對照總表：</h3>
      
      <div class="rpt-6sem-matrix" id="rpt6SemMatrix">
        ${matrixHtml}
      </div>

      <div class="rpt-disclaimer">
        ⚠️ <strong>正式免責宣告：</strong>本審查報告書由「畢業啦～」App 依臺南市私立聖功女中 113 學年度課程地圖與學生勾選資料自動繪製產生，僅供個人學習自我檢核參考。實際畢業資格審查請以學校教務處正式核算之成績資料為準！
      </div>
    </div>
  `;
}

async function exportPngReport() {
  try {
    const wrapper = dom.exportReportWrapper;
    if (!wrapper) return;

    wrapper.innerHTML = generateFullReportHtml();
    wrapper.style.display = 'block';

    const target = wrapper.querySelector('.export-report-document');

    const canvas = await html2canvas(target, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false
    });

    wrapper.style.display = 'none';
    wrapper.innerHTML = '';

    const link = document.createElement('a');
    link.download = `聖功女中113學年度_6學期畢業學分審查報告書_${new Date().toISOString().slice(0,10)}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  } catch (err) {
    alert('PNG 報告書匯出失敗：' + err.message);
  }
}

async function exportPdfReport() {
  try {
    const wrapper = dom.exportReportWrapper;
    if (!wrapper) return;

    wrapper.innerHTML = generateFullReportHtml();
    wrapper.style.display = 'block';

    const documentEl = wrapper.querySelector('.export-report-document');

    const pageHeightPx = Math.floor(800 * (297 / 210));

    const boxes = documentEl.querySelectorAll('.sem-matrix-box');
    const docTop = documentEl.getBoundingClientRect().top;

    boxes.forEach(box => {
      box.style.marginTop = '0px';
    });

    boxes.forEach(box => {
      const rect = box.getBoundingClientRect();
      const topOffset = rect.top - docTop;
      const bottomOffset = rect.bottom - docTop;

      const pageIndexOfTop = Math.floor(topOffset / pageHeightPx);
      const pageIndexOfBottom = Math.floor(bottomOffset / pageHeightPx);

      if (pageIndexOfTop !== pageIndexOfBottom) {
        const nextPageTop = (pageIndexOfTop + 1) * pageHeightPx;
        const pushDistance = nextPageTop - topOffset + 24;
        box.style.marginTop = `${pushDistance}px`;
      }
    });

    const canvas = await html2canvas(documentEl, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false
    });

    wrapper.style.display = 'none';
    wrapper.innerHTML = '';

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

    pdf.save(`聖功女中113學年度_6學期畢業學分審查報告書_${new Date().toISOString().slice(0,10)}.pdf`);
  } catch (err) {
    alert('PDF 報告書匯出失敗：' + err.message);
  }
}

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

function getSemText(sem) {
  const map = { 1: '高一上', 2: '高一下', 3: '高二上', 4: '高二下', 5: '高三上', 6: '高三下' };
  return map[sem] || '學期';
}

function getCatText(cat) {
  const map = { 'required': '必修', 'elective': '選修', 'other': '其他必選修' };
  return map[cat] || '一般';
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function(m) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m];
  });
}
