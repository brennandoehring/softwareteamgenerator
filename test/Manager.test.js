const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can create an officeNumber", () => {
    const test = "313";
    const emp = new Manager("example", 007, test);
    expect(emp.officeNumber).toBe(test);
});

test ("Check getRole()", () => {
    const test = "Manager";
    const emp = new Manager("example", 007, "example@example.com, 313");
    expect(emp.getRole()).toBe(test);
});