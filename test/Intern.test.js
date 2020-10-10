const Intern = require("../lib/Intern");

test("Can create school", () => {
    const test = "Git Academy";
    const emp = new Intern("example", 007, "example@example.com", test);
    expect(emp.school).toBe(test);
});

test("Can getSchool()", () => {
    const test = "Git Academy";
    const emp = new Intern("example", 007, "example@example.com", test);
    expect(emp.getSchool()).toBe(test);
});

test("Can getRole()", () => {
    const test = "Intern";
    const emp = new Intern("example", 007, "example@example.com", test);
    expect(emp.getRole()).toBe(test);
});