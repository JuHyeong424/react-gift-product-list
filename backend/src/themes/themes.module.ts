import { Module } from '@nestjs/common';
import { ThemesController } from './themes.controller';
import { ThemesService } from './themes.service';

@Module({
  imports: [],
  controllers: [ThemesController],
  providers: [ThemesService],
})
export class ThemesModule {}
