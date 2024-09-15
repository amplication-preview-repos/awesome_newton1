import { Module } from "@nestjs/common";
import { FreelanceSectionModuleBase } from "./base/freelanceSection.module.base";
import { FreelanceSectionService } from "./freelanceSection.service";
import { FreelanceSectionController } from "./freelanceSection.controller";
import { FreelanceSectionResolver } from "./freelanceSection.resolver";

@Module({
  imports: [FreelanceSectionModuleBase],
  controllers: [FreelanceSectionController],
  providers: [FreelanceSectionService, FreelanceSectionResolver],
  exports: [FreelanceSectionService],
})
export class FreelanceSectionModule {}
