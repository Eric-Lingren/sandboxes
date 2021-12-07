import 'dart:convert';

import 'package:bloc/bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:hydrated_bloc/hydrated_bloc.dart';
part 'counter_state.dart';

class CounterCubit extends Cubit<CounterState> with HydratedMixin {
  CounterCubit() : super(CounterState(counterValue: 0, wasIncremented: false));

  void increment() => emit(
      CounterState(counterValue: state.counterValue + 1, wasIncremented: true));

  void decrement() => emit(CounterState(
      counterValue: state.counterValue - 1, wasIncremented: false));

  //! Pulls state data from phone storage on reload
  @override
  CounterState? fromJson(Map<String, dynamic> json) {
    return CounterState.fromMap(json);
  }

  //! Sets state data to phone storage on change
  @override
  Map<String, dynamic>? toJson(CounterState state) {
    // Use the below if handing errors locally in the cubit rather than gloabally via utils
    // addError(Exception('Couldnt write to storage!'), StackTrace.current);
    return state.toMap();
  }

  // For one-off debugging
  // //! For debugging and checking current and next state.
  // @override
  // void onChange(Change<CounterState> change) {
  //   print(change);
  //   super.onChange(change);
  // }

  // //! For displaying the error messages from this cubit
  // @override
  // void onError(Object error, StackTrace stackTrace) {
  //   print('$error, $stackTrace');
  //   super.onError(error, stackTrace);
  // }
}
