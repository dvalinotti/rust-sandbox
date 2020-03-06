#[derive(Debug)]
struct Person<'a> {
    // the 'a defines a lifetime
    name: &'a str,
    age: u8,
}

// a unit struct
struct Nil;

// a tuple struct
struct Pair(i32, f32);

// a struct with two fields
struct Point {
    x: f32,
    y: f32,
}

// Struct can be reused as fields of another struct
#[allow(dead_code)]
struct Rectangle {
    top_left: Point,
    bottom_right: Point,
}

fn rect_area(rectangle: &Rectangle) -> f32 {
    // use nested desctructuring to get x and y values
    // asterisk `de-references` a variable, leaving only its value
    // `ref` keyword allows us to take references to fields of a struct
    let Rectangle { top_left: Point { x: x1, y: y1 },
                    bottom_right: Point { x: x2, y: y2 }} = rectangle;

    println!("top_left: ({}, {})", x1, y1);
    println!("bottom_right: ({}, {})", x2, y2);
    (x1 - x2) * (y1 - y2)
}

fn main() {
    // create struct instance with field init shorthand
    let name = "Peter";
    let age: u8 = 27;
    let peter = Person { name, age };
    println!("{:?}", peter);

    // create Point instance
    let point: Point = Point { x: 3.0, y: 4.0 };
    // access fields of the Point
    println!("({}, {})", point.x, point.y);

    // make a new point by using struct update syntax to use
    // the fields of the original Point
    let bottom_right: Point = Point { x: 6.0, y: 10.0 };

    // `bottom_right.y` will be the same as `point.y`
    println!("({}, {})", bottom_right.x, bottom_right.y);

    // destructure the point using `let` binding
    let Point { x: top_edge, y: left_edge } = point;

    let _rectangle: Rectangle = Rectangle {
        // struct instantiation is an expression too!
        top_left: Point { x: left_edge, y: top_edge },
        bottom_right: bottom_right,
    };

    // create Unit instance
    let _nil = Nil;

    // create a Pair tuple instance
    let pair: Pair = Pair(1, 0.1);
    println!("pair contains: {:?} and {:?}", pair.0, pair.1);
    
    // destructure a tuple struct
    let Pair(integer, decimal) = pair;
    println!("pair contains {:?} and {:?}", integer, decimal);

    let area = rect_area(&_rectangle);
    println!("area: {}", area);
}
