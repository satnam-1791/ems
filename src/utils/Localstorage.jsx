
    const employees = [
      {
        "id": 1,
        "password": "123",
        "email": "employee1@example.com",
        "tasks": [
          {
            "date": "2024-11-28",
            "status": "In Progress",
            "taskList": ["Task A", "Task B"],
            "description": "Complete monthly report and prepare meeting agenda."
          },
          {
            "date": "2024-11-29",
            "status": "Pending",
            "taskList": ["Task C"],
            "description": "Review new project proposal."
          }
        ]
      },
      {
        "id": 2,
        "password": "123",
        "email": "employee2@example.com",
        "tasks": [
          {
            "date": "2024-11-28",
            "status": "Completed",
            "taskList": ["Task D", "Task E"],
            "description": "Finish client follow-up calls and send project updates."
          }
        ]
      },
      {
        "id": 3,
        "password": "123",
        "email": "employee3@example.com",
        "tasks": [
          {
            "date": "2024-11-28",
            "status": "In Progress",
            "taskList": ["Task F"],
            "description": "Update website with latest content and images."
          }
        ]
      },
      {
        "id": 4,
        "password": "123",
        "email": "employee4@example.com",
        "tasks": [
          {
            "date": "2024-11-28",
            "status": "Pending",
            "taskList": ["Task G", "Task H"],
            "description": "Research and prepare proposal for new marketing strategy."
          }
        ]
      },
      {
        "id": 5,
        "password": "123",
        "email": "employee5@example.com",
        "tasks": [
          {
            "date": "2024-11-28",
            "status": "Completed",
            "taskList": ["Task I"],
            "description": "Organize team meeting and prepare presentation slides."
          }
        ]
      }
    ]
  
  


    const  admin =[ {
      "id": 6,
      "password": "123",
      "email": "admin@example.com"
    }]
  


 export const setLocalkstorage= ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
 }   
  
 export const getLocalstorage= ()=>{
    const employees=JSON.parse(localStorage.getItem('employees'));
    const admin=JSON.parse(localStorage.getItem('admin'));
    return {employees, admin}
 }