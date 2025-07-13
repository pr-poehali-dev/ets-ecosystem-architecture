import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
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
              <Button variant="ghost" size="sm" className="text-neutral-600">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-neutral-600">
                <Icon name="Settings" size={20} />
              </Button>
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Icon name="User" size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-3xl font-display font-bold text-neutral-900 mb-2">
            Добро пожаловать в экосистему ЕТС! 🚀
          </h2>
          <p className="text-neutral-600 text-lg">
            Все транспортные и логистические услуги в одном приложении
          </p>
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
    </div>
  );
};

export default Index;
