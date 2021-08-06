
class Employee{
  constructor(firstName, lastName, grade, id) {
    this.firstName = firstName
    this.lastName  = lastName
    this.salaryGrade = grade;
    this.id = id
  }


  getName() {
    return `Name: ${this.firstName} ${this.lastName}`
  }

  getSalary() {
    return this.salaryGrade * 20000
  }

}

class Manager extends Employee {

  constructor(firstName, lastName, grade, id) {
    super(firstName, lastName, grade, id)
    this.extra = true
    this.managedEmployees = []
  }

  addEmployee(employee) {
    this.managedEmployees.push(employee)
  }

  removeEmployee(employee) {
    this.managedEmployees.filter(emp => emp.id !== employee.id)
  }

  managingEmployees(beautiful=false) {
    if (beautiful) {
      const res = this.managedEmployees.map(empl => {
        return {
          id:empl.id,
          firstName: empl.firstName,
          lastName: empl.lastName,
          salaryGrade: emp1.salaryGrade,
          verbose: null
        }
      })
      return res
    }
    return this.managedEmployees
  }
  

}


const emp1 = new Employee("lekan", "mekwe", 10, 1)
const emp2 = new Employee("mendi", "menda", 10, 2)
// Create a new employee using an exisiting employee
// as a template
let emp3 = Object.create(emp2)
emp3.firstName = 'updated'
emp3.id = 10

const manager = new Manager("manager", "manager", 10, 3)

manager.addEmployee(emp1)
manager.addEmployee(emp2)
manager.addEmployee(emp3)


console.log(manager.managingEmployees(true))



emp3 = Object.freeze(emp3)
// wont change
emp3.firstName = "meka"

const data = {
  age: 20,
  name: 'Kirian'
  // education: {school: "Oliviet heights",class: "ss2"},
  };

  const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
  

