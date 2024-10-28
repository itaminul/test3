import { NestFactory } from '@nestjs/core';
import { BillingAppModule } from './billing-app.module';

async function bootstrap() {
  const app = await NestFactory.create(BillingAppModule);
  await app.listen(process.env.port ?? 3002);
}
bootstrap();
