// import 'dart:io';

import 'dart:async';

import 'package:connectivity_plus/connectivity_plus.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hydrated_bloc/hydrated_bloc.dart';
import 'package:path_provider/path_provider.dart';
import 'package:provider_practice/logic/cubits/counter_cubit.dart';
import 'package:provider_practice/logic/cubits/internet_cubit.dart';
// import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:provider_practice/presentation/router/app_router.dart';
import 'package:provider_practice/utility/app_bloc_observer.dart';
// import 'package:provider_practice/presentation/screens/home_screen.dart';
// import 'package:provider_practice/presentation/screens/second_screen.dart';
// import 'package:provider_practice/presentation/screens/third_screen.dart';
// import 'logic/cubits/counter_cubit.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  HydratedBloc.storage = await HydratedStorage.build(
    storageDirectory: await getApplicationDocumentsDirectory(),
  );

  Bloc.observer = AppBlocObserver();

  runApp(MyApp(
    appRouter: AppRouter(),
    connectivity: Connectivity(),
  ));
}

class MyApp extends StatefulWidget {
  final AppRouter appRouter;
  final Connectivity connectivity;

  MyApp({Key? key, required this.appRouter, required this.connectivity})
      : super(key: key);

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider<InternetCubit>(
            create: (context) =>
                InternetCubit(connectivity: widget.connectivity)),
        BlocProvider<CounterCubit>(create: (context) => CounterCubit())
      ],
      child: MaterialApp(
        title: 'Flutter Demo',
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        // Generated Routing Example:
        onGenerateRoute: widget.appRouter.onGenerateRoute,
      ),
    );
  }
}
