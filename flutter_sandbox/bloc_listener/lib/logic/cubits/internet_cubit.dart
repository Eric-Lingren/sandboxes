import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';

import 'package:provider_practice/constants/connection_types.dart';

part 'internet_state.dart';

class InternetCubit extends Cubit<InternetState> {
  final Connectivity connectivity;
  late StreamSubscription connectivityStreamSubscription;

  InternetCubit({
    required this.connectivity,
    connectivityStreamSubscription,
  }) : super(InternetLoading()) {
    monitorInternetConnection();
  }

  StreamSubscription<ConnectivityResult> monitorInternetConnection() {
    return connectivityStreamSubscription =
      connectivity.onConnectivityChanged.listen((connectivityResult) {
        if (connectivityResult == ConnectivityResult.wifi) {
          emitInternetConnected(ConnectionTypes.Wifi);
        } else if (connectivityResult == ConnectivityResult.mobile) {
          emitInternetConnected(ConnectionTypes.Mobile);
        } else if (connectivityResult == ConnectivityResult.none) {
          emitInternetDisconneted();
        }
      });
  }

  void emitInternetConnected(ConnectionTypes _connectionTypes) =>
      emit(InternetConnected(connectionType: _connectionTypes));

  void emitInternetDisconneted() => emit(InternetDisonnected());

  @override 
  Future<void> close() {
    connectivityStreamSubscription.cancel();
    return super.close();
  }
}
