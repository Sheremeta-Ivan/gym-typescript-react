export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourClasses",
  ContactUs = "contactUs",
}

export interface BenefitType {
  title: string;
  description: string;
  icon: JSX.Element;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
