export class Student {
    constructor (argObject = {
        id: "",
        name: "",
        isActive: false,
        birthYear: Number.NaN,
        connections: Number.NaN,
        completedCredits: Number.NaN,
        activeSemesterCount: Number.NaN,
        image: "",
    }) {
        this.id = argObject.id;
        this.name = argObject.name;
        this.isActive = argObject.isActive;
        this.birthYear = argObject.birthYear;
        this.connections = argObject.connections;
        this.completedCredits = argObject.completedCredits;
        this.activeSemesterCount = argObject.activeSemesterCount;
        this.image = argObject.image;
    }
}