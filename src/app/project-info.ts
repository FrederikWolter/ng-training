export interface Project {
    id: number;
    name: string;
    description: string;
    year: number;
    job_group: undefined | 'AI' | 'WI' | 'WING';
    abba: string;
    status: undefined | 'offen' | 'bewerbungsphase' | 'besetzt';
} 
  
export const statusList: ('offen' | 'bewerbungsphase' | 'besetzt')[] = ['offen', 'bewerbungsphase', 'besetzt'];
export const jobGroupList: ('AI' | 'WI' | 'WING')[] = ['AI', 'WI', 'WING'];
export const projectList :Project[] = [
    {
        id: 1,
        name: 'Chatbot für Ausbildungsabteilung',
        description: 'Einen Chatbot für die Ausbildungsabteilung als Webseite für Support',
        year: 2021,
        job_group: "AI",
        abba: "Frederik",
        status: 'offen'
    },
    {
        id: 2,
        name: 'Update für Kaffemaschine',
        description: 'Kaffemaschine in 061 braucht Java software und Update',
        year: 2020,
        job_group: "WI",
        abba: "Kevin",
        status: 'besetzt'
    },
    {
        id: 3,
        name: 'Erstellen von Laptop-Rollout',
        description: 'Für 2023 muss neues Laptop-Rollout erstellt werden mit Google-Docs/Spreadsheet/Slides und Drive Schulung',
        year: 2020,
        job_group: "WING",
        abba: "Kevin",
        status: 'offen'
    }
];