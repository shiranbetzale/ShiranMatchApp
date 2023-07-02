import { FormField } from "./FormFields.type";
import { calculateAge, getDateBefore } from "./generalFunction";

const detailsFormArray: FormField[] = [
    {
        id: "id",
        text: "תעודת זהות:",
        keyboardTypeOption: "numeric",
        fieldType: "input",
    },
    {
        id: "fullName",
        text: "שם מלא:",
        keyboardTypeOption: "default",
        fieldType: "input"
    },
    {
        id: "gender",
        text: "מגדר:",
        options: [
            { id: 1, name: "gender", label: "זכר" },
            { id: 2, name: "gender", label: "נקבה" }
        ],
        fieldType: "radioButton",
        handlePress: () => { }
    },
    {
        id: "birthDateHe",
        text: "תאריך לידה עברי:",
        keyboardTypeOption: "default",
        fieldType: "input"
    },
    {
        id: "birthDate",
        text: "תאריך לידה לועזי:",
        fieldType: "datePicker",
        maxDate: getDateBefore(18)
    },
    {
        id: "age",
        text: "גיל:",
        keyboardTypeOption: "numeric",
        fieldType: "input",
        editable: false,
        defaultValue: calculateAge(new Date)
    },
    {
        id: "hight",
        text: "גובה:",
        keyboardTypeOption: "numeric",
        fieldType: "input"
    },
    {
        id: "city",
        text: "עיר מגורים:",
        keyboardTypeOption: "default",
        fieldType: "input"
    },
    {
        id: "highSchoolName",
        text: "שם של תיכון:",
        keyboardTypeOption: "default",
        fieldType: "input",
        condition: [
            { fieldId: "gender", value: "2" }
        ]
    },
    {
        id: "seminarName",
        text: "שם של סמינר:",
        keyboardTypeOption: "default",
        fieldType: "input",
        condition: [
            { fieldId: "gender", value: "2" }
        ]
    },
    {
        id: "mail",
        text: "מייל:",
        keyboardTypeOption: "default",
        fieldType: "input"
    },
    {
        id: "phone",
        text: "טלפון:",
        keyboardTypeOption: "numeric",
        fieldType: "input"
    },
    {
        id: "typeOfPhone",
        text: "סוג נייד:",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "typeOfPhone", label: "כשר" },
            { id: 2, name: "typeOfPhone", label: "מוגן" },
            { id: 3, name: "typeOfPhone", label: "לא מוגן" }
        ]
    },
    {
        id: "status",
        text: "סטטוס:",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "status", label: "רווק/ה" },
            { id: 2, name: "status", label: "אלמן/ה" },
            { id: 3, name: "status", label: "גרוש/ה" },
            { id: 4, name: "status", label: "אלמן/ה +" },
            { id: 5, name: "status", label: "גרוש/ה +" }
        ]
    },
    {
        id: "countOfChildren",
        text: "מספר ילדים:",
        keyboardTypeOption: "numeric",
        fieldType: "input",
        condition: [
            { fieldId: "status", value: "4" },
            { fieldId: "status", value: "5" }
        ]
    },
    {
        id: "hashkafa",
        text: "השקפה:",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "hashkafa", label: "דתי/ה" },
            { id: 2, name: "hashkafa", label: "חרדי/ת" },
            { id: 3, name: "hashkafa", label: "חרדי/ת מודרני/ת" },
            { id: 4, name: "hashkafa", label: "חוזר/ת בתשובה" }
        ]
    },
    {
        id: "hozerBitshoveAge",
        text: "מאיזה גיל חוזר בתשובה?",
        keyboardTypeOption: "numeric",
        fieldType: "input",
        condition: [
            { fieldId: "hashkafa", value: "4" },
        ]
    },
    {
        id: "moveLocation",
        text: "מעוניין/ת להשאר ולגור בעיר מגוריי?",
        fieldType: "switch"
    },
    {
        id: "smoker",
        text: "מעשן/ת?",
        fieldType: "switch"
    },
    {
        id: "ger",
        text: "מעוניין/ת בגר/ת צדק?",
        fieldType: "switch"
    },
    {
        id: "hozerBitshuva",
        text: "מעוניין/ת בחוזר/ת בתשובה?",
        fieldType: "switch"
    },
    {
        id: "drivingLicense",
        text: "רישיון נהיגה?",
        fieldType: "switch"
    },
    {
        id: "cohen",
        text: "את/ה כהן/ת?",
        fieldType: "switch"
    },
    {
        id: "whatWorks",
        text: "עיסוק",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            {
                id: 1,
                name: "whatWorks",
                label: "בחור ישיבה",
                isShow: [
                    { fieldId: "gender", value: "1" }
                ]
            },
            {
                id: 2,
                name: "whatWorks",
                label: "אברך",
                isShow: [
                    { fieldId: "gender", value: "1" }
                ]
            },
            {
                id: 3,
                name: "whatWorks",
                label: "עובד/ת"
            },
            {
                id: 4,
                name: "whatWorks",
                label: "סטודנט/ית - לימודים אקדמיים"
            },
            {
                id: 5,
                name: "whatWorks",
                label: "חצי עובד/ת חצי לומד/ת - אקדמאי/ת"
            },
            {
                id: 6,
                name: "whatWorks",
                label: "חצי עובד חצי לומד",
                isShow: [
                    { fieldId: "gender", value: "1" }
                ]
            }
        ],
    },
    {
        id: "smallYeshiva",
        text: "ישיבה קטנה:",
        keyboardTypeOption: "default",
        fieldType: "input",
        condition: [
            { fieldId: "whatWorks", value: "1" },
            { fieldId: "gender", value: "1" }
        ]
    },
    {
        id: "BigYeshiva",
        text: "ישיבה גדולה:",
        keyboardTypeOption: "default",
        fieldType: "input",
        condition: [
            { fieldId: "gender", value: "1" },
            { fieldId: "whatWorks", value: "1" },
        ]
    },
    {
        id: "kibutz",
        text: "קיבוץ:",
        keyboardTypeOption: "default",
        fieldType: "input",
        condition: [
            { fieldId: "whatWorks", value: "1" },
            { fieldId: "gender", value: "1" }
        ]
    },
    {
        id: "colel",
        text: "כולל:",
        keyboardTypeOption: "default",
        fieldType: "input",
        condition: [
            { fieldId: "gender", value: "1" },
            { fieldId: "whatWorks", value: "2" },
        ]
    },
    {
        id: "nameOfWork",
        text: "במה עובד/ת?",
        keyboardTypeOption: "default",
        fieldType: "input",
        condition: [
            { fieldId: "whatWorks", value: "3" },
            { fieldId: "whatWorks", value: "5" },
            { fieldId: "whatWorks", value: "6" }
        ]
    },
    {
        id: "whatLearning",
        text: "מה לומד/ת?",
        keyboardTypeOption: "default",
        fieldType: "input",
        condition: [
            { fieldId: "whatWorks", value: "4" },
            { fieldId: "whatWorks", value: "5" }
        ]
    },
    {
        id: "education",
        text: "השכלה:",
        fieldType: "checkbox",
        handlePress: () => console.log(),
        options: [
            {
                id: 1,
                name: "education",
                label: "תואר"
            },
            {
                id: 2,
                name: "education",
                label: "הנדסאי/ת"
            },
            {
                id: 3,
                name: "education",
                label: "בגרות",
            },
            {
                id: 4,
                name: "education",
                label: "ישיבה",
                isShow: [
                    { fieldId: "gender", value: "1" },
                    { fieldId: "whatWorks", value: "1" },
                ]
            }
        ]
    },
    {
        id: "bodyStructure",
        text: "מבנה גוף:",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "bodyStructure", label: "רזה" },
            { id: 2, name: "bodyStructure", label: "בריא/ה" },
            { id: 3, name: "bodyStructure", label: "מלא/ה" }
        ]
    },
    {
        id: "skinColor",
        text: "צבע עור:",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "skinColor", label: "בהיר/ה" },
            { id: 2, name: "skinColor", label: "ממוצע - לא כהה ולא בהיר/ה" },
            { id: 3, name: "skinColor", label: "כהה" }
        ]
    },
    {
        id: "beardType",
        text: "סוג זקן:",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "beardType", label: "זקן - שלא נגעו בו" },
            { id: 2, name: "beardType", label: "זקן - מסודר" },
            { id: 3, name: "beardType", label: "זיפים" },
            { id: 4, name: "beardType", label: "מגולח" }
        ],
        condition: [
            { fieldId: "gender", value: "1" }
        ]
    },
    {
        id: "clothes",
        text: "לבוש:",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "clothes", label: "שחור לבן" },
            { id: 2, name: "clothes", label: "צבעוני" },
            { id: 3, name: "clothes", label: "צבעוני ובשבת שחור לבן" }
        ],
        condition: [
            { fieldId: "gender", value: "1" }
        ]
    },
    {
        id: "zerem",
        text: "זרם:",
        fieldType: "select",
        handlePress: () => console.log(),
        options: [
            { id: 1, name: "zerem", label: "חסיד" },
            { id: 2, name: "zerem", label: "ליטאי" },
            { id: 3, name: "zerem", label: "ספרדי" }
        ]
    },
    {
        id: "hasidut",
        text: "זרם חסידות?",
        keyboardTypeOption: "default",
        fieldType: "input",
        condition: [
            { fieldId: "zerem", value: "1" }
        ]
    },
    {
        id: "tribe",
        text: "עדה?",
        keyboardTypeOption: "default",
        fieldType: "input",
        condition: [
            { fieldId: "zerem", value: "3" }
        ]
    },
    {
        id: "fatherName",
        text: "שם של האבא:",
        keyboardTypeOption: "default",
        fieldType: "input"
    },
    {
        id: "motherName",
        text: "שם של האמא:",
        keyboardTypeOption: "default",
        fieldType: "input"
    },
    {
        id: "rabbiName",
        text: "מי הרב שלי?",
        keyboardTypeOption: "default",
        fieldType: "input"
    },
    {
        id: "importantInfo",
        text: "קצת עלי...",
        keyboardTypeOption: "default",
        fieldType: "input",
        multiline: true
    },
    {
        id: "familyInfo",
        text: "קצת על המשפחה",
        keyboardTypeOption: "default",
        fieldType: "input",
        multiline: true
    },
    {
        id: "phonesForInquiries",
        text: "טלפונים לברורים:",
        keyboardTypeOption: "default",
        fieldType: "input",
        multiline: true
    },
]

export default detailsFormArray;
