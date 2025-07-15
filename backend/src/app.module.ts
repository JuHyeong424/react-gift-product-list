import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ThemesModule } from './themes/themes.module';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [AuthModule, ThemesModule, ProductsModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
