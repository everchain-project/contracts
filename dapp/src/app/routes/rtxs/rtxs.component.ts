import { Component, OnInit } from '@angular/core';

import { PaymentService } from '../../services/payment/payment.service';
import { WalletService } from '../../services/wallet/wallet.service';
import { RtxService } from '../../services/rtx/rtx.service';

@Component({
  selector: 'app-rtxs',
  templateUrl: './rtxs.component.html',
  styleUrls: ['./rtxs.component.css']
})
export class RtxsComponent implements OnInit {

    constructor(
        public Payments: PaymentService,
        public Wallets: WalletService,
        public RTx: RtxService,
    ){}

    ngOnInit() {

    }

}
