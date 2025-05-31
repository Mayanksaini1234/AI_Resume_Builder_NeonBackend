import type { Schema, Struct } from '@strapi/strapi';

export interface CertificateCertificate extends Struct.ComponentSchema {
  collectionName: 'components_certificate_certificates';
  info: {
    displayName: 'certificate';
    icon: 'book';
  };
  attributes: {
    certificateName: Schema.Attribute.String;
    discription: Schema.Attribute.RichText;
    endDate: Schema.Attribute.String;
    issuedBy: Schema.Attribute.String;
    link: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
  };
}

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    description: '';
    displayName: 'education';
  };
  attributes: {
    degree: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    major: Schema.Attribute.String;
    marksNumber: Schema.Attribute.String;
    marksType: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    universityName: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experience_s';
  info: {
    description: '';
    displayName: 'experience ';
    icon: 'attachment';
  };
  attributes: {
    city: Schema.Attribute.String;
    companyName: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    state: Schema.Attribute.String;
    title: Schema.Attribute.String;
    workSummery: Schema.Attribute.RichText;
  };
}

export interface HobbiesHobbies extends Struct.ComponentSchema {
  collectionName: 'components_hobbies_hobbies';
  info: {
    displayName: 'Hobbies';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    hobbyTitle: Schema.Attribute.String;
  };
}

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    description: '';
    displayName: 'project';
    icon: 'attachment';
  };
  attributes: {
    discription: Schema.Attribute.RichText;
    keywords: Schema.Attribute.String;
    liveLink: Schema.Attribute.String;
    projectName: Schema.Attribute.String;
  };
}

export interface ResponsibilityResponsibility extends Struct.ComponentSchema {
  collectionName: 'components_responsibility_responsibilities';
  info: {
    displayName: 'responsibility';
    icon: 'briefcase';
  };
  attributes: {
    discription: Schema.Attribute.RichText;
    endDate: Schema.Attribute.String;
    positionTitle: Schema.Attribute.String;
    societyName: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
  };
}

export interface SkillsSkillls extends Struct.ComponentSchema {
  collectionName: 'components_skills_skillls_s';
  info: {
    displayName: 'skillls ';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface Skills1Skills1 extends Struct.ComponentSchema {
  collectionName: 'components_skills1_skills1s';
  info: {
    description: '';
    displayName: 'skills';
  };
  attributes: {
    skillName: Schema.Attribute.Component<'skills.skillls', true>;
    skillTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'certificate.certificate': CertificateCertificate;
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'hobbies.hobbies': HobbiesHobbies;
      'project.project': ProjectProject;
      'responsibility.responsibility': ResponsibilityResponsibility;
      'skills.skillls': SkillsSkillls;
      'skills1.skills1': Skills1Skills1;
    }
  }
}
