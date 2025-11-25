export interface Email {
  emailNumber: number;
  subject: string;
  body: string;
}

export interface EmailSequence {
  emails: Email[];
}

export interface LeadData {
  name?: string;
  association?: string;
  persona?: string;
  programClicked?: string;
  pastInteractions?: string[];
  timezone?: string;
  eligibilityFlags?: string[];
}