import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

// Mock auth components (inline for demo)
const AuthForm = ({
  onAuth,
  onClose,
}: {
  onAuth: (user: any) => void;
  onClose?: () => void;
}) => {
  const [phone, setPhone] = useState("");
  const [userType, setUserType] = useState<
    "client" | "driver" | "partner" | "admin"
  >("client");

  const handleQuickAuth = (type: "client" | "driver" | "partner" | "admin") => {
    const mockUser = {
      id: Math.random().toString(36),
      phone: "+7 (999) 123-45-67",
      role: type,
      name:
        type === "admin"
          ? "Администратор ЕТС"
          : type === "driver"
            ? "Водитель ЕТС"
            : type === "partner"
              ? "Партнер ЕТС"
              : "Пользователь ЕТС",
      verified: true,
    };
    onAuth(mockUser);
  };

  const userTypes = [
    {
      id: "client",
      name: "Пользователь",
      icon: "User",
      description: "Заказ услуг",
    },
    {
      id: "driver",
      name: "Водитель",
      icon: "Car",
      description: "Выполнение заказов",
    },
    {
      id: "partner",
      name: "Партнер",
      icon: "Building",
      description: "Бизнес-аккаунт",
    },
    {
      id: "admin",
      name: "Администратор",
      icon: "Shield",
      description: "Управление системой",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-ets-gradient rounded-xl flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">
                E
              </span>
            </div>
            <h2 className="text-xl font-display font-bold text-neutral-900">
              Вход в ЕТС
            </h2>
          </div>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-neutral-700 mb-3">
              Выберите тип аккаунта:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {userTypes.map((type) => (
                <Button
                  key={type.id}
                  onClick={() => handleQuickAuth(type.id as any)}
                  className="h-auto p-4 flex-col space-y-2 bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-700 hover:text-neutral-900"
                  variant="outline"
                >
                  <Icon name={type.icon} size={20} />
                  <span className="font-medium">{type.name}</span>
                  <span className="text-xs text-neutral-500">
                    {type.description}
                  </span>
                </Button>
              ))}
            </div>
          </div>

          <div className="text-center text-xs text-neutral-500 pt-4 border-t">
            Демо-режим: выберите любой тип аккаунта для входа
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminDashboard = () => {
  const systemStats = {
    totalUsers: 45628,
    activeDrivers: 892,
    totalOrders: 15420,
    revenue: 2850000,
    systemHealth: 98.5,
  };

  const serviceStatus = [
    { name: "ЕТС Пассажир", status: "online", uptime: "99.9%", users: 12400 },
    { name: "ЕТС Такси", status: "online", uptime: "99.8%", users: 8900 },
    { name: "ЕТС Груз", status: "warning", uptime: "98.2%", users: 3200 },
    { name: "ЕТС Доставка", status: "online", uptime: "99.7%", users: 5600 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "online":
        return "bg-green-500";
      case "warning":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-display font-bold text-neutral-900">
            Панель администратора
          </h2>
          <p className="text-neutral-600">Управление экосистемой ЕТС</p>
        </div>
        <Badge className="bg-green-50 text-green-700 border-green-200">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
          Система в норме
        </Badge>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Пользователи</p>
                <p className="text-2xl font-bold text-neutral-900">
                  {systemStats.totalUsers.toLocaleString()}
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Icon name="Users" size={20} className="text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Водители</p>
                <p className="text-2xl font-bold text-neutral-900">
                  {systemStats.activeDrivers}
                </p>
              </div>
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <Icon name="Car" size={20} className="text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Заказы</p>
                <p className="text-2xl font-bold text-neutral-900">
                  {systemStats.totalOrders.toLocaleString()}
                </p>
              </div>
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Icon name="Package" size={20} className="text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-600">Выручка</p>
                <p className="text-2xl font-bold text-neutral-900">
                  {(systemStats.revenue / 1000000).toFixed(1)}M₽
                </p>
              </div>
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Icon name="DollarSign" size={20} className="text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Icon name="Activity" size={20} />
            <span>Статус сервисов</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {serviceStatus.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`}
                  />
                  <div>
                    <p className="font-medium text-neutral-900">
                      {service.name}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {service.users.toLocaleString()} активных пользователей
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-neutral-900">
                    {service.uptime}
                  </p>
                  <p className="text-sm text-neutral-600">Uptime</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Index = () => {
  const [user, setUser] = useState<any>(null);
  const [showAuth, setShowAuth] = useState(false);

  const handleLogin = (userData: any) => {
    setUser(userData);
    setShowAuth(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Если пользователь - администратор, показываем админ-панель
  if (user?.role === "admin") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 font-body">
        <header className="bg-white/80 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-ets-gradient rounded-xl flex items-center justify-center">
                  <span className="text-white font-display font-bold text-lg">
                    E
                  </span>
                </div>
                <h1 className="text-2xl font-display font-bold text-neutral-900">
                  ЕТС Админ
                </h1>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-neutral-600">{user.name}</span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <Icon name="LogOut" size={16} className="mr-2" />
                  Выйти
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AdminDashboard />
        </div>
      </div>
    );
  }

  const services = [
    {
      id: "passenger",
      title: "ЕТС Пассажир",
      description: "Междугородние и городские маршруты",
      icon: "Bus",
      color: "bg-primary",
      gradient: "bg-ets-gradient",
      stats: { trips: "2.4k", routes: "150+" },
    },
    {
      id: "taxi",
      title: "ЕТС Такси",
      description: "Быстрые поездки по городу",
      icon: "Car",
      color: "bg-warning-500",
      gradient: "bg-gradient-to-br from-yellow-400 to-orange-500",
      stats: { trips: "8.7k", drivers: "340" },
    },
    {
      id: "cargo",
      title: "ЕТС Груз",
      description: "Грузоперевозки любой сложности",
      icon: "Truck",
      color: "bg-neutral-700",
      gradient: "bg-gradient-to-br from-slate-600 to-slate-800",
      stats: { orders: "1.2k", tonnage: "450т" },
    },
    {
      id: "delivery",
      title: "ЕТС Доставка",
      description: "Курьерская доставка по городу",
      icon: "Package",
      color: "bg-success",
      gradient: "bg-success-gradient",
      stats: { deliveries: "5.3k", time: "45мин" },
    },
    {
      id: "market",
      title: "ЕТС Маркет",
      description: "Интернет-магазин с доставкой",
      icon: "ShoppingBag",
      color: "bg-purple-500",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
      stats: { products: "12k+", sellers: "250" },
    },
    {
      id: "booking",
      title: "ЕТС Заказ",
      description: "Бронирование услуг и столиков",
      icon: "Calendar",
      color: "bg-blue-500",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
      stats: { bookings: "890", venues: "120" },
    },
    {
      id: "school",
      title: "ЕТС Школа",
      description: "Образовательные курсы",
      icon: "GraduationCap",
      color: "bg-emerald-500",
      gradient: "bg-gradient-to-br from-emerald-500 to-teal-500",
      stats: { students: "1.8k", courses: "45" },
    },
  ];

  const userStats = {
    balance: 2850,
    bonuses: 1240,
    trips: 127,
    rating: 4.9,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 font-body">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-ets-gradient rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">
                  E
                </span>
              </div>
              <h1 className="text-2xl font-display font-bold text-neutral-900">
                ЕТС
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-neutral-600"
                  >
                    <Icon name="Bell" size={20} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-neutral-600"
                  >
                    <Icon name="Settings" size={20} />
                  </Button>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-neutral-600">
                      {user.name}
                    </span>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} className="text-white" />
                    </div>
                    <Button variant="ghost" size="sm" onClick={handleLogout}>
                      <Icon name="LogOut" size={16} />
                    </Button>
                  </div>
                </>
              ) : (
                <Button
                  onClick={() => setShowAuth(true)}
                  className="bg-ets-gradient"
                >
                  <Icon name="LogIn" size={16} className="mr-2" />
                  Войти
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-display font-bold text-neutral-900 mb-2">
            {user
              ? `Добро пожаловать, ${user.name}!`
              : "Добро пожаловать в экосистему ЕТС!"}{" "}
            🚀
          </h2>
          <p className="text-neutral-600 text-lg">
            {user
              ? user.role === "driver"
                ? "Управляйте заказами и отслеживайте маршруты"
                : user.role === "partner"
                  ? "Управляйте бизнесом и отслеживайте аналитику"
                  : "Все транспортные и логистические услуги в одном приложении"
              : "Все транспортные и логистические услуги в одном приложении"}
          </p>
          {!user && (
            <Button
              onClick={() => setShowAuth(true)}
              className="mt-4 bg-ets-gradient hover:opacity-90"
              size="lg"
            >
              <Icon name="Rocket" size={20} className="mr-2" />
              Начать пользоваться
            </Button>
          )}
        </div>

        {/* User Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm hover:shadow-md transition-all duration-200 animate-slide-up">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-600">Баланс</p>
                  <p className="text-2xl font-bold text-neutral-900">
                    {userStats.balance.toLocaleString()}₽
                  </p>
                </div>
                <div className="w-10 h-10 bg-ets-gradient rounded-lg flex items-center justify-center">
                  <Icon name="Wallet" size={20} className="text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm hover:shadow-md transition-all duration-200 animate-slide-up">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-600">Бонусы</p>
                  <p className="text-2xl font-bold text-warning-500">
                    {userStats.bonuses.toLocaleString()}
                  </p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <Icon name="Star" size={20} className="text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm hover:shadow-md transition-all duration-200 animate-slide-up">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-600">Поездки</p>
                  <p className="text-2xl font-bold text-success">
                    {userStats.trips}
                  </p>
                </div>
                <div className="w-10 h-10 bg-success-gradient rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm hover:shadow-md transition-all duration-200 animate-slide-up">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-600">Рейтинг</p>
                  <p className="text-2xl font-bold text-neutral-900">
                    {userStats.rating}
                  </p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Icon name="Award" size={20} className="text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="mb-8">
          <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6">
            Наши сервисы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className="border-0 shadow-sm bg-white/60 backdrop-blur-sm hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 ${service.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}
                    >
                      <Icon
                        name={service.icon}
                        size={24}
                        className="text-white"
                      />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      Активен
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-display font-bold text-neutral-900 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-sm text-neutral-600">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-between text-sm">
                    <div>
                      <p className="text-neutral-500">Заказы</p>
                      <p className="font-semibold text-neutral-700">
                        {Object.values(service.stats)[0]}
                      </p>
                    </div>
                    <div>
                      <p className="text-neutral-500">
                        {Object.keys(service.stats)[1].charAt(0).toUpperCase() +
                          Object.keys(service.stats)[1].slice(1)}
                      </p>
                      <p className="font-semibold text-neutral-700">
                        {Object.values(service.stats)[1]}
                      </p>
                    </div>
                  </div>
                  <Progress value={65 + index * 5} className="mt-3 h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm animate-fade-in">
          <CardHeader>
            <CardTitle className="text-xl font-display font-bold text-neutral-900">
              Быстрые действия
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="h-16 flex-col space-y-2 bg-ets-gradient hover:opacity-90 transition-opacity">
                <Icon name="Navigation" size={20} />
                <span className="text-sm">Заказать такси</span>
              </Button>
              <Button className="h-16 flex-col space-y-2 bg-success-gradient hover:opacity-90 transition-opacity">
                <Icon name="Package" size={20} />
                <span className="text-sm">Доставка</span>
              </Button>
              <Button className="h-16 flex-col space-y-2 bg-gradient-to-br from-purple-500 to-pink-500 hover:opacity-90 transition-opacity">
                <Icon name="ShoppingCart" size={20} />
                <span className="text-sm">Магазин</span>
              </Button>
              <Button className="h-16 flex-col space-y-2 bg-gradient-to-br from-orange-500 to-red-500 hover:opacity-90 transition-opacity">
                <Icon name="MapPin" size={20} />
                <span className="text-sm">Маршруты</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Auth Modal */}
      {showAuth && (
        <AuthForm onAuth={handleLogin} onClose={() => setShowAuth(false)} />
      )}
    </div>
  );
};

export default Index;
