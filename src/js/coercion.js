console.info(
  `Converting a value from one type to another is often called “type casting,” when done explicitly, and “coercion” when done implicitly (forced by the rules of how a value is used`
);

var a = 42;
var b = a + ""; // implicit coercion
var c = String(a); // explicit coercion

console.log("Type of variable B is:", typeof b);
console.log("Type of variable C is:", typeof c);

// Explicit Coercion
//    Number()
//    String()
//    Boolean()

console.info("Note: Coercion and parsing is different");
var a = "42";
var b = "42px";

Number(a); // 42
parseInt(a); // 42

Number(b); // NaN
parseInt(b); // 42
