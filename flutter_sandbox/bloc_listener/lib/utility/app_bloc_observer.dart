// ignore_for_file: avoid_renaming_method_parameters

import 'package:flutter_bloc/flutter_bloc.dart';

class AppBlocObserver extends BlocObserver {
  @override
  void onChange(BlocBase blocBase, Change change) {
    print(change);
    super.onChange(blocBase, change);
  }

  @override
  void onCreate(BlocBase blocBase) {
    print(blocBase);
    super.onCreate(blocBase);
  }

  @override
  void onClose(BlocBase blocBase) {
    print(blocBase);
    super.onClose(blocBase);
  }

  @override
  void onError(BlocBase blocBase, Object error, StackTrace stackTrace) {
    print('$error, $stackTrace');
    super.onError(blocBase, error, stackTrace);
  }
}
