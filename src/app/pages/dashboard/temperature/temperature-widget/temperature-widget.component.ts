import { Component, OnInit, OnDestroy } from '@angular/core';
import { Client, Stomp } from '@stomp/stompjs';

Object.assign({ WebSocket });

@Component({
  selector: 'ngx-temperature-widget',
  templateUrl: './temperature-widget.component.html',
  styleUrls: ['./temperature-widget.component.scss']
})
export class TemperatureWidgetComponent implements OnInit, OnDestroy {

  idDevice: string = ''
  temperature: string = '0 °C'
  client: Client;

  constructor() { }
  ngOnDestroy(): void {
    this.client.deactivate();
  }

  ngOnInit(): void {
    let SockJS = require('sockjs-client')
    var socket = new SockJS('http://localhost:8080/ws');
    this.client = Stomp.over(socket);

    const self = this
    // stompClient.connect({}, function (frame) {
    //   console.log('Connected: ' + frame);
    //   stompClient.subscribe('/topic/device/1', function (messageOutput) {
    //       self.temperature = messageOutput.body
    //   });
    // });

    this.client.debug = function (str) {
      console.log(str);
    };

    this.client.onConnect = function (frame) {
      console.log(frame)
      // Do something, all subscribes must be done is this callback
      // This is needed because this will be executed after a (re)connect
      const subscription = self.client.subscribe('/topic/device/1', callback);
    };

    this.client.onWebSocketError = function (frame) {
      // Will be invoked in case of error encountered at Broker
      // Bad login/passcode typically will cause an error
      // Complaint brokers will set `message` header with a brief message. Body may contain details.
      // Compliant brokers will terminate the connection after any error
      console.log('frame: ' + frame);
      console.log('Broker reported error: ' + frame.headers);
      console.log('Additional details: ' + frame.body);
    };

    this.client.onStompError = function (frame) {
      // Will be invoked in case of error encountered at Broker
      // Bad login/passcode typically will cause an error
      // Complaint brokers will set `message` header with a brief message. Body may contain details.
      // Compliant brokers will terminate the connection after any error
      console.log('frame: ' + frame);
      console.log('Broker reported error: ' + frame.headers['message']);
      console.log('Additional details: ' + frame.body);
    };

    this.client.activate();

    let callback = function (message) {
      let mess:string = message.body;
      let data: string[] = mess.split('/');
      self.idDevice = data[0];
      self.temperature = data[1];
    };



  }

}
