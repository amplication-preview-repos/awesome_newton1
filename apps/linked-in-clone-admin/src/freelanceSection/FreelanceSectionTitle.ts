import { FreelanceSection as TFreelanceSection } from "../api/freelanceSection/FreelanceSection";

export const FREELANCESECTION_TITLE_FIELD = "id";

export const FreelanceSectionTitle = (record: TFreelanceSection): string => {
  return record.id?.toString() || String(record.id);
};
