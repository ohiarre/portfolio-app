export interface HeroCard {
    title: string,
    imageUrl: string,
}

export interface AboutCard {
    title: string,
    imageUrl: string,
    description: string,
}

export interface ExperienceCards {
    imageUrl: string,
    jobTitle: string,
    jobName: string,
    imagesUrl: string[],
    startDate: string,
    endDate: string,
    jobDescription: string,
}

export interface SkillsCard {
    skillName: string,
    imageUrl: string[],
    skillPercentage: string[],
}

export interface ProjectsCard {
    projectTitle: string,
    projectLink: string,
    imageUrl: string,
    projectDescription: string,
}

export interface ScrollUpCard {
    scrollName: string,
    imageUrl: string,
}