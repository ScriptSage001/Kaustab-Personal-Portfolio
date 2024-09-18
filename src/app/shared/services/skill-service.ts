import { Injectable } from '@angular/core';
import { Skill } from '../models/skill-model';

@Injectable({
  providedIn: 'root'
})

export class SkillService {
    skills: Skill[] = [
        {
            "title": "C#",
            "type": "Languages",
            "iconUrl": "https://img.icons8.com/ios-filled/100/c-sharp-logo.png"
        },
        {
            "title": "SQL",
            "type": "Languages",
            "iconUrl": "https://img.icons8.com/ios-filled/100/sql.png"
        },
        {
            "title": "JavaScript",
            "type": "Languages",
            "iconUrl": "https://img.icons8.com/ios-filled/100/javascript.png"
        },
        {
            "title": "TypeScript",
            "type": "Languages",
            "iconUrl": "https://img.icons8.com/ios-filled/100/typescript.png"
        },
        {
            "title": "C",
            "type": "Languages",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2Ficons8-c-programming-480.png?alt=media&token=4e1df4b5-3157-4941-86f9-38da2ad6d926"
        },
        {
            "title": "C++",
            "type": "Languages",
            "iconUrl": "https://img.icons8.com/ios-filled/100/c-plus-plus-logo.png"
        },
        {
            "title": "HTML",
            "type": "Languages",
            "iconUrl": "https://img.icons8.com/ios-filled/100/html-5--v1.png"
        },
        {
            "title": "CSS",
            "type": "Languages",
            "iconUrl": "https://img.icons8.com/ios-filled/100/css3.png"
        },
        {
            "title": ".NET Core",
            "type": "Frameworks & Technologies",
            "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-plain.svg"
        },
        {
            "title": "ASP.NET Core",
            "type": "Frameworks & Technologies",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2FMediamodifier-Design-Template.png?alt=media&token=b508d452-8227-414e-89f7-6eba522e1b61"
        },
        {
            "title": "EF Core",
            "type": "Frameworks & Technologies",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2FEntity-Framework-Core-Logo%20(1).png?alt=media&token=02304ca6-c3c7-497d-899a-e40098edb0e5"
        },
        {
            "title": "Dapper",
            "type": "Frameworks & Technologies",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2F9d4ed380-a8e8-11eb-9f21-c8c87b0f4275.png?alt=media&token=43954da3-4d45-4023-b6eb-01125d0d4fbe"
        },
        {
            "title": "MSSQL",
            "type": "Frameworks & Technologies",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2Fmicrosoft-sql-server-logo-black-and-white.png?alt=media&token=86337edc-2706-405c-a48f-e4a284fe54f7"
        },
        {
            "title": "PostgreSQL",
            "type": "Frameworks & Technologies",
            "iconUrl": "https://img.icons8.com/ios-filled/100/postgreesql.png"
        },
        {
            "title": "ElasticSearch",
            "type": "Frameworks & Technologies",
            "iconUrl": "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/100/external-elasticsearch-a-search-engine-based-on-the-lucene-library-logo-bold-tal-revivo.png"
        },
        {
            "title": "MediatR",
            "type": "Frameworks & Technologies",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2FpluginIcon%20(1).png?alt=media&token=59d84645-5926-4258-95ae-ee506821d130"
        },
        {
            "title": "JWT",
            "type": "Frameworks & Technologies",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2Ficons8-jwt-480.png?alt=media&token=bc785880-6c28-4e1c-98b5-eeca072ec09a"
        },
        {
            "title": "RabbitMQ",
            "type": "Frameworks & Technologies",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2Frabbitmq-original%20(1).png?alt=media&token=0289fbd0-5903-4b31-b596-9d0da643488c"
        },
        {
            "title": "Angular",
            "type": "Frameworks & Technologies",
            "iconUrl": "https://img.icons8.com/ios-filled/100/angularjs.png"
        },
        {
            "title": "Visual Studio",
            "type": "Tools",
            "iconUrl": "https://img.icons8.com/ios-filled/100/visual-studio.png"
        },
        {
            "title": "VS Code",
            "type": "Tools",
            "iconUrl": "https://img.icons8.com/fluency-systems-filled/100/visual-studio-code-2019.png"
        },
        {
            "title": "Jet Brains Rider",
            "type": "Tools",
            "iconUrl": "https://img.icons8.com/ios-filled/100/rider-jetbrains.png"
        },
        {
            "title": "Postman",
            "type": "Tools",
            "iconUrl": "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/500/external-postman-is-the-only-complete-api-development-environment-logo-bold-tal-revivo.png"
        },
        {
            "title": "Swagger",
            "type": "Tools",
            "iconUrl": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-plain.svg"
        },
        {
            "title": "Git",
            "type": "Tools",
            "iconUrl": "https://img.icons8.com/ios-filled/100/git.png"
        },
        {
            "title": "GitHub",
            "type": "Tools",
            "iconUrl": "https://img.icons8.com/ios-filled/100/github.png"
        },
        {
            "title": "Kibana",
            "type": "Tools",
            "iconUrl": "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/100/external-kibana-is-an-open-source-data-visualization-plugin-for-elasticsearch-logo-bold-tal-revivo.png"
        },
        {
            "title": "TeamCity",
            "type": "Tools",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2Fteamcity-icon-logo-black-and-white.png?alt=media&token=74d3449b-acad-431d-a114-e03f58ddf049"
        },
        {
            "title": "Octopus",
            "type": "Tools",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2Foctopus_deploy_logo_icon_145017.png?alt=media&token=16327a75-2a6b-4891-9288-37959c0a0dd7"
        },
        {
            "title": "Docker",
            "type": "Tools",
            "iconUrl": "https://img.icons8.com/ios-filled/100/docker.png"
        },
        {
            "title": "Azure",
            "type": "Cloud Platforms",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2Ficons8-azure-240%20(1).png?alt=media&token=3efc9af5-de26-4e29-9987-53ee75f7245d"
        },
        {
            "title": "Supabase",
            "type": "Cloud Platforms",
            "iconUrl": "https://img.icons8.com/fluency-systems-filled/100/supabase.png"
        },
        {
            "title": "Firebase",
            "type": "Cloud Platforms",
            "iconUrl": "https://img.icons8.com/material-rounded/100/firebase.png"
        },
        {
            "title": "Render",
            "type": "Cloud Platforms",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2Fec37a3660704e1fa2b4246c9a01ab34e145194ad-824x824%20(1).png?alt=media&token=6f9d0033-add7-4943-8c86-35e14cb84b59"
        },
        {
            "title": "Agile",
            "type": "Methodologies",
            "iconUrl": "https://img.icons8.com/external-flatart-icons-solid-flatarticons/100/external-agile-web-design-and-development-flatart-icons-solid-flatarticons.png"
        },
        {
            "title": "Scrum",
            "type": "Methodologies",
            "iconUrl": "https://img.icons8.com/external-outline-black-m-oki-orlando/100/external-scrum-product-management-outline-outline-black-m-oki-orlando.png"
        },
        {
            "title": "Domain-Driven Design (DDD)",
            "type": "Methodologies",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2F118-1183990_tridef-smartcam-now-available-in-asus-giftbox-app%20(1).png?alt=media&token=c1459a2b-4322-4d6a-bcac-5c30b3b2b375"
        },
        {
            "title": "Clean Architecture",
            "type": "Methodologies",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2Fcleanarchitecture%20(1).png?alt=media&token=82e0967b-a205-4e7e-b94e-2aa98c5a8855"
        },
        {
            "title": "CI/CD",
            "type": "Methodologies",
            "iconUrl": "https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/100/external-infinity-arrows-pack-tanah-basah-basic-outline-tanah-basah-2.png"
        },
        {
            "title": "Microservices",
            "type": "Other",
            "iconUrl": "https://img.icons8.com/external-outline-lafs/100/external-modeling-iiot-outline-iconset-outline-lafs.png"
        },
        {
            "title": "Micro Frontends",
            "type": "Other",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2F1696406454-micro-frontends-2-independent-frontends.png?alt=media&token=2d916a7d-e527-4364-81a3-6399d2425510"
        },
        {
            "title": "Couchbase",
            "type": "Other",
            "iconUrl": "https://firebasestorage.googleapis.com/v0/b/kaustab-samanta.appspot.com/o/icons%2Fcouchbase-original%20(1).png?alt=media&token=c57013f0-67f5-40f2-94fc-5099bf86ffa5"
        },
        {
            "title": "Redis",
            "type": "Other",
            "iconUrl": "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/100/external-redis-an-in-memory-data-structure-project-implementing-a-distributed-logo-bold-tal-revivo.png"
        } 
    ];

    getAllSkills(): Skill[] {
        return this.skills;
    }
}
