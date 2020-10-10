const Engineer = require("../lib/Engineer");

test("Can set github account", () => {
    const test = "examplegit";
    const emp = new Engineer("example", 007, "example@example.com", test);
    expect(emp.github).toBe(test);
});

test("Can getGithub()", () => {
    const test = "examplegit";
    const emp = new Engineer("example", 007, "example@example.com", test);
    expect(emp.getGithub()).toBe(test);
});

test("Can getRole()", () => {
    const test = "Engineer";
    const emp = new Engineer("example", 007, "example@example.com", test);
    expect(emp.getRole()).toBe(test);
});

