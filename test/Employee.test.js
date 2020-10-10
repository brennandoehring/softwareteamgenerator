const Employee = require("../lib/Employee");

test("Check for object", () => {
    const emp = new Employee();
    expectExport(typeof(emp)).toBe("object");
});

test("Can create a name", () => {
    const name = "example";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test("Can create an id", () => {
    const id = "example";
    const emp = new Employee(id);
    expect(emp.id).toBe(id);
});

test("Can create an email", () => {
    const email = "example@example.com";
    const emp = new Employee(email);
    expect(emp.email).toBe(email);
});

test("Can getName()", () => {
    const test = "example";
    const emp = new Employee(test);
    expect(emp.getName()).toBe(test);
});

test("Can getId()", () => {
    const test = "007";
    const emp = new Employee(test);
    expect(emp.getId()).toBe(test);
});

test ("Can getEmail()", () => {
    const test = "example@example.com"
    const emp = new Employee("example", 007, test);
    expect(emp.getEmail()).toBe(test);
});

test ("Can getRole()", () => { 
    const test = "Employee"
    const emp = new Employee("example", 007, "example@example.com");
    expect(e.getRole()).toBe(test)
});


