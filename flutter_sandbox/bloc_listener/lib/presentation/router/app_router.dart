import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:provider_practice/logic/cubits/counter_cubit.dart';
import 'package:provider_practice/presentation/screens/home_screen.dart';
import 'package:provider_practice/presentation/screens/second_screen.dart';
import 'package:provider_practice/presentation/screens/third_screen.dart';


// For Global Routing with one provider passed to Every Page via the MaterialApp:
class AppRouter {

  Route? onGenerateRoute(RouteSettings routeSettings) {
    switch (routeSettings.name) {
      case '/':
        return MaterialPageRoute(
            builder: (_) => HomeScreen(title: 'Home Page', color: Colors.blueAccent));
        break;
      case '/second':
        return MaterialPageRoute(
            builder: (_) => SecondScreen(
                title: 'Second Page', color: Colors.redAccent));
        break;
      case '/third':
        return MaterialPageRoute(
            builder: (_) => ThirdScreen(
                title: 'Third Page', color: Colors.greenAccent));
        break;
      default:
        return null;
    }
  }

}

//
//For Global Routing with one provider passed to multiple pages:
// class AppRouter {
//   final CounterCubit _counterCubit = CounterCubit();

//   Route? onGenerateRoute(RouteSettings routeSettings) {
//     switch (routeSettings.name) {
//       case '/':
//         return MaterialPageRoute(
//             builder: (_) => BlocProvider.value(
//                   value: _counterCubit,
//                   child:
//                       HomeScreen(title: 'Home Page', color: Colors.blueAccent),
//                 ));
//         break;
//       case '/second':
//         return MaterialPageRoute(
//             builder: (_) => BlocProvider.value(
//                   value: _counterCubit,
//                   child: SecondScreen(
//                       title: 'Second Page', color: Colors.redAccent),
//                 ));
//         break;
//       case '/third':
//         return MaterialPageRoute(
//             builder: (_) => BlocProvider.value(
//                   value: _counterCubit,
//                   child: ThirdScreen(
//                       title: 'Third Page', color: Colors.greenAccent),
//                 ));
//         break;
//       default:
//         return null;
//     }
//   }

//   void dispose() {
//     _counterCubit.close();
//   }
// }
