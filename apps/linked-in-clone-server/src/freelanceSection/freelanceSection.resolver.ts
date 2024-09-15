import * as graphql from "@nestjs/graphql";
import { FreelanceSectionResolverBase } from "./base/freelanceSection.resolver.base";
import { FreelanceSection } from "./base/FreelanceSection";
import { FreelanceSectionService } from "./freelanceSection.service";

@graphql.Resolver(() => FreelanceSection)
export class FreelanceSectionResolver extends FreelanceSectionResolverBase {
  constructor(protected readonly service: FreelanceSectionService) {
    super(service);
  }
}
