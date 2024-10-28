import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './app.dto';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('BILLING_SERVICE') private readonly billingProxyClient: ClientKafka,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  createOrder(payload: CreateOrderDto) {
    this.billingProxyClient.emit();
  }
}
