# התאמה אישית של העיצוב

## קצת על sass
העיצוב של האתר פותח באמצעות **sass**, שזו הרחבה לשפת העיצוב הידועה **css**. היתרון בשימוש ב-sass הוא שניתן להשתמש בפיצ׳רים כגון יצירת משתנים, ירושה של תכונות עיצוב, פונקציות ועוד.  

במידה ואתם לא רוצים להשתמש ב-sass, תמיד תוכלו להמיר את הקוד חזרה ל-css, אם כי אנחנו פחות ממליצים על זה.

לקבצי sass יש סיומת .sass והם נראים קצת שונה מקוד css רגיל. למשל, על מנת לתחום בלוקים משתמשים בהזחה (רווחים) במקום בסוגריים מסולסלים. 
בנוסף, ניתן ליצור ולהשתמש במשתנים באמצעות סימן ה-$, ובזה נשתמש **המון**.

### הערה
אם אתם עורכים את הקוד ב-vs code, מומלץ להתקין תוספים מתאימים לצורך הדגשת קוד והשלמה אוטומטית. 

לפיכך, גשו לחנות התוספים ב-vs code וחפשו "sass". בחרו את התוצאה הראשונה שמופיעה והתקינו את התוסף.
## הגדרות עיצוב גלובליות 
ישנם 2 קבצים עיקריים אשר מכתיבים את ההגדרות העיצוביות שחלות על כל הפרויקט - **globals.sass** ו-**variables.sass**. תוכלו למצוא אותם בתיקייה src/style.

בקובץ variables.sass נגדיר את כל המשתנים הגלובליים שנשתמש בהם בעיצוב הפרויקט: צבעים, גדלי מסכים, פונטים ועוד.

בקובץ globals.sass ניצור סטיילינג שיחול על כל העמודים בפרויקט ויהיה ניתן להשתמש במחלקות שלו בכל קבצי העיצוב האחרים.

למשל, בקטע הקוד הבא, אנו מגדירים את אורך השורה וצבע הפונט של אלמנטים מסוג p, כלומר פסקאות. הגדרות אלו יחולו על כל הפסקאות באתר אלא אם כן נפרט אחרת באופן מפורש.
<div dir="ltr">

```sass
p
    line-height: 1.5
    color: $text-color-secondary
```

</div>

לפיכך, עריכה של הקבצים **globals.sass** ו-**variables.sass**
היא החלק המשמעותי ביותר כאשר רוצים להתאים אישית את העיצוב של ״ידע״ לצרכים שלכם.
