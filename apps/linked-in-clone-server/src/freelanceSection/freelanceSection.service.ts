import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FreelanceSectionServiceBase } from "./base/freelanceSection.service.base";

@Injectable()
export class FreelanceSectionService extends FreelanceSectionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
