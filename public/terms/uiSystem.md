# רכיבים ויזואלים מובנים

תבנית האתר מגיעה עם מספר רכיבי ui מובנים מראש, שגם אותם ניתן להתאים אישית לצרכים שלכם.


## תפריט ניווט צדדי 
תפריט הניווט המדדי הוא אחד מהרכיבים הכי חשובים בתבנית הזו. הוא מאפשר למשתמש לקפוץ במהירות בין מונחים שונים  וללמוד במהירות.

הקוד מאחורי תפריט הניווט נמצא בתיקיה src/components/side-navigation. שם ישנם 3 רכיבים עיקריים - NabigationItem, NavigationHeader ו- SideNavigation.
כלומר, כותרת ואיבר בתפריט והתפריט עצמו.


## כפתורים

ניתן ליצור כפתורים באמצעות הרכיבים **PrimaryButton** ו-**SecondaryButton**, שנמצאים בקובץ

<a href="https://github.com/talisraeli/Yeda/blob/main/src/components/UI/Buttons/Buttons.tsx">
src/components/UI/Buttons/Buttons.tsx.
</a>

הכפתורים מקבלים מספר פרמטרים:

- onClick פונקציה שתזומן כאשר לוחצים על הכפתור

- icon - תמונה או קובץ svg שיופיע בכפתור

- iconAlt - תיאור לסמל שמופיע בכפתור, במידה והוא לא נטען כשורה

- isReversed - האם לסדר את האייקון והטקסט בסדר הפוך (ערך בוליאני)

- children - תוכן הכפתור
  (בדרך כלל טקסט)

כל התכונות אשר קשורות לאייקון הינן אופציונליות.

למשל, כך יצרנו את כפתורי המעבר בין דפים שונים בתפריט:

```tsx

<PrimaryButton onClick={visitPreviousItem} icon={backArrow}isReversed={true}
>
    למושג הקודם
</PrimaryButton>

<PrimaryButton onClick={visitNextItem} icon={nextArrow}>
    למושג הבא
</PrimaryButton>
```

## דיאלוג

// להוסיף בהמשך

## שדה חיפוש

// להוסיף בהמשך
