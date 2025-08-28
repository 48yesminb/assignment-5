
6. Answer the following questions clearly:
   
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

   <!-- Ans:1 -->

getElementById(একটা নির্দিষ্ট ID দিয়ে এলিমেন্ট খুঁজে বের করে।
example:let element = document.getElementById("myAssignment");

getElementsByClassName(
  একটা ক্লাস নাম দিয়ে একাধিক এলিমেন্ট খুঁজে বের করে।
  Example:
  let elements = document.getElementsByClassName("box");

)
querySelector(
  CSS selector ব্যবহার করে এলিমেন্ট খুঁজে বের করে।
  প্রথম ম্যাচ করা এলিমেন্ট ফেরত দেয়।
  Example:let firstSign = document.querySelector(".Sign");
)
querySelectorAll?(
  সব ম্যাচ করা এলিমেন্ট NodeList হিসেবে ফেরত দেয়।
  Example:let allDiv = document.querySelectorAll(".Div");
)

)

How do you create and insert a new element into the DOM?

<!-- Ans:2 -->
প্রথমে একটি এলিমেন্ট তৈরি করবো,তারপর নতুন  অ্যাট্রিবিউট যোগ করে Dom এ বসানো হয়.

What is Event Bubbling and how does it work?
 <!-- Ans:3 -->
(যখন কোনো এলিমেন্টে ইভেন্ট ঘটে ইভেন্টটা প্রথম target element-এ হয় এবং তারপর parent এলিমেন্টগুলোতে উপরের দিকে চলে যায়,
একেই Event Bubbling বলে ।)


What is Event Delegation in JavaScript? Why is it useful?
 <!-- Ans:4 -->
 ( বড় parent এলিমেন্টে ইভেন্ট বসানো এবং child এলিমেন্টগুলোর ইভেন্ট হ্যান্ডেল করা।)

What is the difference between preventDefault() and stopPropagation() methods?
 <!-- Ans:5 -->
 preventDefault(
ব্রাউজারের default আচরণ বন্ধ করে।
 )
 stopPropagation() (
  ইভেন্টকে parent এ চলে যাওয়া বন্ধ করে ।
 )