export class Job {
    id = '';
    technologies = '';
    company = '';
    description = '';
    vacancies = '';
    minSalary = '';
    maxSalary = '';
    modality = '';
    experience = '';
    title = '';
    category = '';
    contractType = '';
    publicationDate = '';
    processStatus = ''

    constructor(id, technologies, company, description, vacancies, minSalary, maxSalary, modality, experience, title, category, contractType, publicationDate, processStatus) {
       
        this.id = id;
        this.technologies = technologies;
        this.company = company;
        this.description = description;
        this.vacancies = vacancies;
        this.minSalary = minSalary;
        this.maxSalary = maxSalary;
        this.modality = modality;
        this.experience = experience;
        this.title = title;
        this.category = category;
        this.contractType = contractType;
        this.publicationDate = publicationDate;
        this.processStatus = processStatus;
    }
}