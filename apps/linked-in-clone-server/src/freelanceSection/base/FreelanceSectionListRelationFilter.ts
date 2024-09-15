/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FreelanceSectionWhereInput } from "./FreelanceSectionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FreelanceSectionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FreelanceSectionWhereInput,
  })
  @ValidateNested()
  @Type(() => FreelanceSectionWhereInput)
  @IsOptional()
  @Field(() => FreelanceSectionWhereInput, {
    nullable: true,
  })
  every?: FreelanceSectionWhereInput;

  @ApiProperty({
    required: false,
    type: () => FreelanceSectionWhereInput,
  })
  @ValidateNested()
  @Type(() => FreelanceSectionWhereInput)
  @IsOptional()
  @Field(() => FreelanceSectionWhereInput, {
    nullable: true,
  })
  some?: FreelanceSectionWhereInput;

  @ApiProperty({
    required: false,
    type: () => FreelanceSectionWhereInput,
  })
  @ValidateNested()
  @Type(() => FreelanceSectionWhereInput)
  @IsOptional()
  @Field(() => FreelanceSectionWhereInput, {
    nullable: true,
  })
  none?: FreelanceSectionWhereInput;
}
export { FreelanceSectionListRelationFilter as FreelanceSectionListRelationFilter };
