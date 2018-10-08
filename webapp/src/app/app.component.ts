import {
  Component,
  OnInit
} from '@angular/core';
import {
  Web3Service
} from "./web3.service";
import * as jsSHA from 'jssha';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public input = null;
  public file = null;
  public fr = null;

  accounts: any;
  account: String[];
  balance: any;

  constructor(public web3Service: Web3Service) {
    this.initAndDisplayAccount(() => {
      this.account = this.accounts[0];
    });
  }

  ngOnInit() {

  }

  initAndDisplayAccount = (callback) => {
    let that = this;
    this.web3Service.getAccountInfo().then((acctInfo) => {
      that.accounts = acctInfo;
      callback();
    }).catch((error) => {
      console.log(error);
      callback();
    });
  };

  hashForFile(callback) {
    this.input = document.getElementById("hashFile");
    if (!this.input.files[0]) {
      alert("Please select a file first");
    } else {
      this.file = this.input.files[0];
      this.fr = new FileReader();
      this.fr.onload = function (e) {
        this.content = e.target.result;
        var shaObj = new jsSHA("SHA-256", "ARRAYBUFFER");
        shaObj.update(this.content);
        var hash = "0x" + shaObj.getHash("HEX");
        callback(null, hash);
      };
      this.fr.readAsArrayBuffer(this.file);
    }
  }

  send() {
    this.hashForFile((err, hash) => {
      if (!(this.account === undefined)) {
        this.web3Service.notary_send(hash, (err, tx) => {
          if (!err) {
            $("#responseText").html("<p>File successfully fingreprinted onto Ethereum blockchain.</p>" +
              "<p>File Hash Value: " + hash + "</p>" +
              "<p>Transaction ID: " + tx + "</p>" +
              "<p>Available at contract address: " + this.web3Service.contractDeployedAt + "</p>" +
              "<p><b>Please alow a few minutes for transaction to be mined.</b></p>"
            );
          } else {
            $("#responseText").html("<p>Error: file not send.</p>" +
              "<p>You have rejected the transaction</p>"
            );
          }
        });
      } else {
        $("#responseText").html("<p>Error: file not send.</p>" +
          "<p>You're not connected to <a href='https://metamask.io/'>MetaMask</a></p>" +
          "<p>Please connected you and refresh to send files !</p>"
        );
      }
    })
  }

  find() {
    this.hashForFile((err, hash) => {
      if (!(this.account === undefined)) {
        this.web3Service.notary_find(hash, (err, resultObj) => {
          if (resultObj.blockNumber != 0) {
            $("#responseText").html("<p>File fingerprint found on Ethereum blockchain.</p>" +
              "<p>File Hash Value: " + hash + "</p>" +
              "<p>Block No.: " + resultObj.blockNumber + "</p>" +
              "<p>Timestamp: " + resultObj.mineTime + "</p>" +
              "<p>From Account: " + resultObj.account + "</p>"
            );
          } else {
            $("#responseText").html("<p>File fingerprint not found on Ethereum blockchain.</p>" +
              "<p>File Hash Value: " + hash + "</p>"
            );
          }
        });
      } else {
        $("#responseText").html("<p>Error: file not found.</p>" +
          "<p>You're not connected to <a href='https://metamask.io/'>MetaMask</a></p>" +
          "<p>Please connected you and refresh to found files !</p>"
        );
      }
    })
  }
}
