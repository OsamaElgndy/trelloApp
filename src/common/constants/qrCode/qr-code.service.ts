import { Injectable } from '@nestjs/common';
import * as qrcode from 'qrcode';

@Injectable()
export class QrCodeService {
 async generateQrCode(data: string): Promise<void> {
  try {
   const qrCodeimge = await qrcode.toFile("qr-code.png", data,
    function (err) {
     if (err) throw err
     console.log('done')
    }

   );
   return qrCodeimge;
  } catch (error) {
   throw new Error('Failed to generate QR code.');
  }
 }
}