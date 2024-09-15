import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FreelanceSectionService } from "./freelanceSection.service";
import { FreelanceSectionControllerBase } from "./base/freelanceSection.controller.base";

@swagger.ApiTags("freelanceSections")
@common.Controller("freelanceSections")
export class FreelanceSectionController extends FreelanceSectionControllerBase {
  constructor(protected readonly service: FreelanceSectionService) {
    super(service);
  }
}
