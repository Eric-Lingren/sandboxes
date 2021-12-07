import 'dart:developer';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:provider_practice/constants/connection_types.dart';
import 'package:provider_practice/logic/cubits/counter_cubit.dart';
import 'package:provider_practice/logic/cubits/internet_cubit.dart';
import 'package:provider_practice/presentation/screens/second_screen.dart';

class HomeScreen extends StatefulWidget {
  HomeScreen({Key? key, required this.title, required this.color})
      : super(key: key);

  String title;
  Color color;

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  _HomeScreenState createState() => _HomeScreenState();

  @override
  Widget build(BuildContext context) {
    // return BlocListener<InternetCubit, InternetState>(
    //   listener: (context, state) {
    //     if(state is InternetConnected && state.connectionType == ConnectionTypes.Wifi){
    //       context.read<CounterCubit>().increment();
    //     } else if (state is InternetConnected && state.connectionType == ConnectionTypes.Mobile){
    //       context.read<CounterCubit>().decrement();
    //     }
    //   },
    // child:
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'You have pushed the button this many times:',
            ),
            const SizedBox(height: 12),
            BlocConsumer<CounterCubit, CounterState>(
              listener: (context, state) {
                if (state.wasIncremented) {
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                      duration: Duration(milliseconds: 200),
                      content: Text('Incremented')));
                } else {
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                      duration: Duration(milliseconds: 200),
                      content: Text('Decremented')));
                }
              },
              builder: (context, state) {
                if (state.counterValue % 2 == 0) {
                  return Text(
                    'Its Even: ${state.counterValue.toString()}',
                    style: Theme.of(context).textTheme.headline4,
                  );
                } else {
                  return Text(
                    'Its Odd: ${state.counterValue.toString()}',
                    style: Theme.of(context).textTheme.headline4,
                  );
                }
              },
            ),
            const SizedBox(
              height: 24,
            ),
            Builder(builder: (context) {
              final counterState = context.watch<CounterCubit>().state;
              final internetState = context.watch<InternetCubit>().state;

              if (internetState is InternetConnected &&
                  internetState.connectionType == ConnectionTypes.Wifi) {
                return Text(
                  'Counter: ' +
                      counterState.counterValue.toString() +
                      ' Internet: Wifi',
                  style: Theme.of(context).textTheme.headline6,
                );
              } else if (internetState is InternetConnected &&
                  internetState.connectionType == ConnectionTypes.Mobile) {
                return Text(
                  'Counter: ' +
                      counterState.counterValue.toString() +
                      ' Internet: Mobile',
                  style: Theme.of(context).textTheme.headline6,
                );
              } else {
                return Text(
                  'Counter: ' +
                      counterState.counterValue.toString() +
                      ' Internet: Disconnected',
                  style: Theme.of(context).textTheme.headline6,
                );
              }
            }),
            const SizedBox(
              height: 24,
            ),
            //! Context.select is like prev state. It rebuilds the widget when the current state differes from teh previous state.
            Builder(builder: (context) {
              final counterValue =
                  context.select((CounterCubit cubit) => cubit.state.counterValue);
                  return Text(
                  'Counter: ' +counterValue.toString(),
                  style: Theme.of(context).textTheme.headline6,
                );
            }),
            const SizedBox(
              height: 24,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                FloatingActionButton(
                  onPressed: () {
                    context.read<CounterCubit>().decrement();
                  },
                  heroTag: "btn3",
                  backgroundColor: widget.color,
                  tooltip: 'Decrement',
                  child: const Icon(Icons.remove),
                ),
                FloatingActionButton(
                  onPressed: () {
                    context.read<CounterCubit>().increment();
                  },
                  heroTag: "btn4",
                  backgroundColor: widget.color,
                  tooltip: 'Increment',
                  child: const Icon(Icons.add),
                ),
              ],
            ),
            const SizedBox(
              height: 24,
            ),
            MaterialButton(
              color: Colors.redAccent,
              textColor: Colors.white,
              child: const Text('Go to Second Screen'),
              onPressed: () {
                Navigator.of(context).pushNamed('/second');
              },
            ),
            const SizedBox(
              height: 24,
            ),
            MaterialButton(
              color: Colors.greenAccent,
              textColor: Colors.white,
              child: const Text('Go to Third Screen'),
              onPressed: () {
                Navigator.of(context).pushNamed('/third');
              },
            )
          ],
        ),
      ),
    );
    // );
  }
}
