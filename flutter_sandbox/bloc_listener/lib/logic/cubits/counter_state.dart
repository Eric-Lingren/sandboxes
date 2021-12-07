part of 'counter_cubit.dart';

//! JSON Serialize this file to save it in phone storage
class CounterState extends Equatable {
  int counterValue;
  bool wasIncremented;

  CounterState({
    required this.counterValue,
    required this.wasIncremented
  });

  @override
  // TODO: implement props
  List<Object?> get props => [counterValue, wasIncremented];

  Map<String, dynamic> toMap() {
    return {
      'counterValue': counterValue,
      'wasIncremented': wasIncremented,
    };
  }

  factory CounterState.fromMap(Map<String, dynamic> map) {
    return CounterState(
      counterValue: map['counterValue'],
      wasIncremented: map['wasIncremented'],
    );
  }

  String toJson() => json.encode(toMap());

  factory CounterState.fromJson(String source) => CounterState.fromMap(json.decode(source));

  //! For debugging and checking current and next state.
  @override
  String toString() => 'CounterState(counterValue: $counterValue, wasIncremented: $wasIncremented)';
}
