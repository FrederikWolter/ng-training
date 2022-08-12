export interface Project {
    id?: number;
    name?: string;
    description?: string;
    year?: number;
    abba?: string;
    status?: string;
  } 
  
  export const projectList = [
    {
        id: 1,
        name: 'Chatbot für Ausbildungsabteilung',
        description: 'Einen Chatbot für die Ausbildungsabteilung als Webseite für Support',
        year: 2021,
        abba: "Jens-Peter Fahrwerk",
        status: 'open'
    },
    {
        id: 2,
        name: 'Update für Kaffemaschine',
        description: 'Kaffemaschine in 061 braucht Java software und Update',
        year: 2020,
        abba: "Kevin Latusinski",
        status: 'manned'
    },
    {
        id: 3,
        name: 'Erstellen von Laptop-Rollout',
        description: 'Für 2023 muss neues Laptop-Rollout erstellt werden mit Google-Docs/Spreadsheet/Slides und Drive Schulung',
        year: 2020,
        abba: "Kevin Latusinski",
        status: 'open'
    }
  ];