export interface Hero {
    id: number;
    name: string;
    franchise: 'Marvel' | 'DC';
}

export const heroes: Hero[] = [
    { id: 1, name: 'Batman', franchise: 'DC' },
    { id: 2, name: 'Ironman', franchise: 'Marvel' },
    { id: 3, name: 'Thor', franchise: 'Marvel' },
    { id: 4, name: 'Superman', franchise: 'DC' }
]
