import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUserLoginDto } from './dto/get-user-login';
import { RegisterUserDto } from './dto/register-user.dto';
import { RecoverRequestDto } from './dto/recover-request.dto';
import { RecoverUserDto } from './dto/recover-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() user: GetUserLoginDto) {
    return this.authService.login(user);
  }

  @Post('signup')
  signup(@Body() user: RegisterUserDto) {
    return this.authService.register(user);
  }

  @Patch('recover')
  recoverPasswordRequest(@Body() user: RecoverRequestDto) {
    return this.authService.recoverPasswordRequest(user);
  }

  @Get('upassword')
  updatePassword(@Body() user: RecoverUserDto) {
    return this.authService.updatePassword(user);
  }
}
