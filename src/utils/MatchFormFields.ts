import { FormField } from "./FormFields.type";

const matchFormArray: FormField[] = [
    {
        id: "matchRangeAges",
        text: "טווח גילאים",
        fieldType: "range",
        minRange: 18,
        maxRange: 90,
        step: 1
    },
    {
        id: "matchCountOfChildren",
        text: "עד כמה ילדים",
        fieldType: "range",
        minRange: 0,
        maxRange: 10,
        step: 1
    },
    {
        id: "matchRangeHights",
        text: "טווח גבהים",
        fieldType: "range",
        minRange: 120,
        maxRange: 200,
        step: 1
    },
    {
        id: "matchArea",
        text: "אזור מגורים של הבן/ת הזוג",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "matchArea", label: "מרכז והסביבה" },
            { id: 2, name: "matchArea", label: "דרום והסביבה" },
            { id: 3, name: "matchArea", label: "צפון והסביבה" },
            { id: 4, name: "matchArea", label: "ירושלים והסביבה" },
            { id: 5, name: "matchArea", label: "השפלה והסביבה" }
        ]
    },
    {
        id: "matchTypeOfPhone",
        text: "סוג נייד",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "matchTypeOfPhone", label: "כשר" },
            { id: 2, name: "matchTypeOfPhone", label: "מוגן" },
            { id: 3, name: "matchTypeOfPhone", label: "לא מוגן" },
        ]
    },
    {
        id: "matchStatus",
        text: "סטטוס",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "matchStatus", label: "רווק" },
            { id: 2, name: "matchStatus", label: "אלמן" },
            { id: 3, name: "matchStatus", label: "גרוש" },
            { id: 4, name: "matchStatus", label: "אלמן +" },
            { id: 5, name: "matchStatus", label: "גרוש +" }
        ]
    },
    {
        id: "matchHashkafa",
        text: "השקפה",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "matchHashkafa", label: "דתי" },
            { id: 2, name: "matchHashkafa", label: "חרדי" },
            { id: 3, name: "matchHashkafa", label: "חרדי מודרני" },
            { id: 4, name: "matchHashkafa", label: "חוזר בתשובה" }
        ]
    },
    {
        id: "matchSmoker",
        text: "מעשן?",
        fieldType: "switch"
    },
    {
        id: "matchCohen",
        text: "כהן?",
        fieldType: "switch"
    },
    {
        id: "matchDrivingLicense",
        text: "רישיון?",
        fieldType: "switch"
    },
    {
        id: "matchWhatWorks",
        text: "עיסוק",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "matchWhatWorks", label: "בחור ישיבה" },
            { id: 2, name: "matchWhatWorks", label: "אברך" },
            { id: 3, name: "matchWhatWorks", label: "עובד" },
            { id: 4, name: "matchWhatWorks", label: "סטודנט - לימודים אקדמיים" },
            { id: 5, name: "matchWhatWorks", label: "חצי עובד חצי לומד - אקדמאי" },
            { id: 6, name: "matchWhatWorks", label: "חצי עובד חצי לומד" }
        ]
    },
    {
        id: "matchEducation",
        text: "השכלה",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "matchEducation", label: "תואר" },
            { id: 2, name: "matchEducation", label: "הנדסאי" },
            { id: 3, name: "matchEducation", label: "בגרות" },
            { id: 4, name: "matchEducation", label: "ישיבה" }
        ]
    },
    {
        id: "matchBodyStructure",
        text: "מבנה גוף",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "matchBodyStructure", label: "רזה" },
            { id: 2, name: "matchBodyStructure", label: "בריא" },
            { id: 3, name: "matchBodyStructure", label: "מלא" }
        ]
    },
    {
        id: "matchSkinColor",
        text: "צבע עור",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "matchSkinColor", label: "בהיר" },
            { id: 2, name: "matchSkinColor", label: "כהה" }
        ]
    },
    {
        id: "matchBeardType",
        text: "סוג זקן",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "matchSkinColor", label: "זקן - שלא נגעו בו" },
            { id: 2, name: "matchSkinColor", label: "זקן - מסודר" },
            { id: 3, name: "matchSkinColor", label: "זיפים" },
            { id: 4, name: "matchSkinColor", label: "מגולח" }
        ]
    },
    {
        id: "matchClothes",
        text: "לבוש",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "matchClothes", label: "שחור לבן" },
            { id: 2, name: "matchClothes", label: "צבעוני" },
            { id: 3, name: "matchClothes", label: "צבעוני ובשבת שחור לבן" }
        ]
    },
    {
        id: "matchZerem",
        text: "זרם",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "matchZerem", label: "חסיד" },
            { id: 2, name: "matchZerem", label: "ליטאי" },
            { id: 3, name: "matchZerem", label: "ספרדי" }
        ]
    },
    {
        id: "matchHasidut",
        text: "זרם חסידות?",
        keyboardTypeOption: "default",
        fieldType: "input"
    },
    {
        id: "matchTribe",
        text: "עדיפות לעדה מסויימת?",
        keyboardTypeOption: "default",
        fieldType: "input"
    },
    {
        id: "matchImportantInfo",
        text: "מה חשוב לי בבן/ת הזוג שלי?",
        keyboardTypeOption: "default",
        fieldType: "input",
        multiline: true
    }
]

export default matchFormArray;
