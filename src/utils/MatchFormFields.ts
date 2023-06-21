import { FormField } from "./FormFields.type";

const matchFormArray: FormField[] = [
    {
        text: "מאיזה גיל",
        keyboardTypeOption: "numeric",
        fieldType: "input"
    },
    {
        text: "עד איזה גיל",
        keyboardTypeOption: "numeric",
        fieldType: "input"
    },
    {
        text: "מאיזה גובה",
        keyboardTypeOption: "numeric",
        fieldType: "input"
    },
    {
        text: "עד איזה גובה",
        keyboardTypeOption: "numeric",
        fieldType: "input"
    },
    {
        text: "אזור מגורים",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, label: "מרכז" },
            { id: 2, label: "דרום" },
            { id: 3, label: "צפון" },
            { id: 4, label: "ירושלים" }
        ]
    },
    {
        text: "סוג נייד",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, label: "כשר" },
            { id: 2, label: "מוגן" },
            { id: 3, label: "לא מוגן" },
        ]
    },
    {
        text: "סטטוס",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, label: "רווק" },
            { id: 2, label: "אלמן" },
            { id: 3, label: "גרוש" },
            { id: 4, label: "אלמן +" },
            { id: 5, label: "גרוש +" }
        ]
    },
    {
        text: "עד כמה ילדים",
        keyboardTypeOption: "numeric",
        fieldType: "input"
    },
    {
        text: "השקפה",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, label: "דתי" },
            { id: 2, label: "חרדי" },
            { id: 3, label: "חרדי מודרני" },
            { id: 4, label: "חוזר בתשובה" }
        ]
    },
    {
        text: "מעשן?",
        fieldType: "switch"
    },
    {
        text: "כהן?",
        fieldType: "switch"
    },
    {
        text: "עיסוק",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, label: "בחור ישיבה" },
            { id: 2, label: "אברך" },
            { id: 3, label: "עובד" },
            { id: 4, label: "סטודנט - לימודים אקדמיים" },
            { id: 5, label: "חצי עובד חצי לומד - אקדמאי" },
            { id: 6, label: "חצי עובד חצי לומד" }
        ]
    },
    {
        text: "השכלה",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, label: "תואר" },
            { id: 2, label: "הנדסאי" },
            { id: 3, label: "בגרות" },
            { id: 4, label: "ישיבה" }
        ]
    },
    {
        text: "מבנה גוף",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            { id: 1, label: "רזה" },
            { id: 2, label: "בריא" },
            { id: 3, label: "מלא" }
        ]
    },
    {
        text: "צבע עור",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            { id: 1, label: "בהיר" },
            { id: 2, label: "כהה" }
        ]
    },
    {
        text: "סוג זקן",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            { id: 1, label: "זקן - שלא נגעו בו" },
            { id: 2, label: "זקן - מסודר" },
            { id: 3, label: "זיפים" },
            { id: 4, label: "מגולח" }
        ]
    },
    {
        text: "לבוש",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            { id: 1, label: "שחור לבן" },
            { id: 2, label: "צבעוני" },
            { id: 3, label: "צבעוני ובשבת שחור לבן" }
        ]
    },
    {
        text: "זרם",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            { id: 1, label: "חסיד" },
            { id: 2, label: "ליטאי" },
            { id: 3, label: "ספרדי" }
        ]
    },
    {
        text: "זרם חסידות?",
        keyboardTypeOption: "default",
        fieldType: "input"
    },
    {
        text: "עדה?",
        keyboardTypeOption: "default",
        fieldType: "input"
    },
    {
        text: "מה חשוב לי בבן/ת הזוג שלי?",
        keyboardTypeOption: "default",
        fieldType: "input",
        multiline: true
    }
]

export default matchFormArray;
