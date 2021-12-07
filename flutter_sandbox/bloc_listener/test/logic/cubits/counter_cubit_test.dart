import 'package:bloc_test/bloc_test.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:provider_practice/logic/cubits/counter_cubit.dart';

void main() {
  group('CounterCubit', () {
    CounterCubit counterCubit;

    setUp(() {
      counterCubit = CounterCubit();
    });
    test(
        'The initial state for the CounterCubit is CounterState(counterValue:0',
        () {
      expect(CounterCubit().state,
          CounterState(counterValue: 0, wasIncremented: false));
    });

    blocTest<CounterCubit, CounterState>(
        'The cubit should emit a CounterState(counterValue:1 wasIncremented: true when cubit.increment() function is called.',
        build: () => CounterCubit(),
        act: (counterCubit) => counterCubit.increment(),
        expect: () => [CounterState(counterValue: 1, wasIncremented: true)]
    );

    blocTest<CounterCubit, CounterState>(
        'The cubit should emit a CounterState(counterValue:-1 wasIncremented: false when cubit.decrement() function is called.',
        build: () => CounterCubit(),
        act: (counterCubit) => counterCubit.decrement(),
        expect: () => [CounterState(counterValue: -1, wasIncremented: false)]
    );

    // tearDown(() {
    //   counterCubit.close();
    // });

    // test('Should be one', () {
    //   int expectedNumber = 1;

    //   expect(expectedNumber, 1);
    // });
  });
}
