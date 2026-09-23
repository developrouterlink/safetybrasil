export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  id?: string;
  className?: string;
  phone?: string;
  email?: string;
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  links?: FooterLink[];
}
