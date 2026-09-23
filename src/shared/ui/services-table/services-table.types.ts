export interface ServiceBenefitItem {
  id: string;
  title: string;
  description?: string;
  safetyIncluded?: boolean;
  othersIncluded?: boolean;
}

export interface ServicesTableProps {
  id?: string;
  className?: string;
  title?: string;
  primaryColumnTitle?: string;
  secondaryColumnTitle?: string;
  benefits?: ServiceBenefitItem[];
}
