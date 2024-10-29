import { Controller, Get } from '@nestjs/common';
import { BillingAppService } from './billing-app.service';

@Controller()
export class BillingAppController {
  constructor(private readonly billingAppService: BillingAppService) {}

  @Get()
  getHello(): string {
    return this.billingAppService.getHello();
  }
}
