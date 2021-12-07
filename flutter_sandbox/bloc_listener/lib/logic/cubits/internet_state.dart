// import 'package:equatable/equatable.dart';
part of 'internet_cubit.dart';



@immutable
abstract class InternetState extends Equatable {}

class InternetLoading extends InternetState {
  @override
  List<Object?> get props => throw UnimplementedError();
}


class InternetConnected extends InternetState{
  final ConnectionTypes connectionType;
  InternetConnected({required this.connectionType}){}
  @override
  List<Object?> get props => throw UnimplementedError();
}


class InternetDisonnected extends InternetState{
  @override
  List<Object?> get props => throw UnimplementedError();
}
