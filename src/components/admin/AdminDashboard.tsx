import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Icon from "@/components/ui/icon";

const AdminDashboard = () => {
  const systemStats = {
    totalUsers: 45628,
    activeDrivers: 892,
    totalOrders: 15420,
    revenue: 2850000,
    systemHealth: 98.5
  };

  const recentAlerts = [
    { id: 1, type: 'warning', message: 'Высокая нагрузка на сервер доставки', time: '5 мин назад' },
    { id: 2, type: 'info', message: 'Обновление карт завершено успешно', time: '1 час назад' },
    { id: 3, type: 'error', message: 'Сбой платежной системы восстановлен', time: '2 часа назад' }
  ];

  const serviceStatus = [
    { name: 'ЕТС Пассажир', status: 'online', uptime: '99.9%', users: 12400 },
    { name: 'ЕТС Такси', status: 'online', uptime: '99.8%', users: 8900 },
    { name: 'ЕТС Груз', status: 'warning', uptime: '98.2%', users: 3200 },
    { name: 'ЕТС Доставка', status: 'online', uptime: '99.7%', users: 5600 },
    { name: 'ЕТС Маркет', status: 'online', uptime: '99.9%', users: 15800 },
    { name: 'ЕТС Заказ', status: 'online', uptime: '99.5%', users: 2100 },
    { name: 'ЕТС Школа', status: 'online', uptime: '99.6%', users: 890 }
  ];

  const managementSections = [
    { id: 'users', title: 'Пользователи', icon: 'Users', count: '45.6k', color: 'bg-blue-500' },
    { id: 'drivers', title: 'Водители', icon: 'Car', count: '892', color: 'bg-green-500' },
    { id: 'partners', title: 'Партнеры', icon: 'Building', count: '234', color: 'bg-purple-500' },
    { id: 'orders', title: 'Заказы', icon: 'Package', count: '15.4k', color: 'bg-orange-500' },
    { id: 'finances', title: 'Финансы', icon: 'DollarSign', count: '2.85M₽', color: 'bg-emerald-500' },
    { id: 'analytics', title: 'Аналитика', icon: 'BarChart3', count: 'Отчеты', color: 'bg-cyan-500' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'warning': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getAlertVariant = (type: string) => {
    switch (type) {
      case 'error': return 'destructive';
      case 'warning': return 'default';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      {/* Admin Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-neutral-900">
            Панель администратора
          </h1>
          <p className="text-neutral-600 mt-1">
            Управление экосистемой ЕТС
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            Система в норме
          </Badge>
          <Button variant="outline" size="sm">
            <Icon name="Download" size={16} className="mr-2" />
            Экспорт
          </Button>
        </div>
      </div>

      {/* System Health */}
      <Card className="border-0 shadow-sm bg-gradient-to-r from-green-50 to-emerald-50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Состояние системы
              </h3>
              <div className="flex items-center space-x-4">
                <div className="text-3xl font-bold text-green-600">
                  {systemStats.systemHealth}%
                </div>
                <div className="text-sm text-neutral-600">
                  Все сервисы работают стабильно
                </div>
              </div>
            </div>
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
              <Icon name="Shield" size={32} className="text-white" />
            </div>
          </div>
          <Progress value={systemStats.systemHealth} className="mt-4 h-2" />
        </CardContent>
      </Card>

      {/* Key Metrics */}
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
                <p className="text-sm text-neutral-600">Активные водители</p>
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
                <p className="text-sm text-neutral-600">Заказы сегодня</p>
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

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Service Status */}
        <div className="lg:col-span-2">
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
                  <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`} />
                      <div>
                        <p className="font-medium text-neutral-900">{service.name}</p>
                        <p className="text-sm text-neutral-600">
                          {service.users.toLocaleString()} активных пользователей
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-neutral-900">{service.uptime}</p>
                      <p className="text-sm text-neutral-600">Uptime</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Alerts */}
        <div>
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Icon name="AlertTriangle" size={20} />
                <span>Уведомления</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentAlerts.map((alert) => (
                <Alert key={alert.id} variant={getAlertVariant(alert.type)}>
                  <AlertDescription className="text-sm">
                    <div className="space-y-1">
                      <p>{alert.message}</p>
                      <p className="text-xs opacity-70">{alert.time}</p>
                    </div>
                  </AlertDescription>
                </Alert>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Management Sections */}
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle>Управление системой</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {managementSections.map((section) => (
              <Button
                key={section.id}
                variant="outline"
                className="h-20 flex-col space-y-2 hover:shadow-md transition-all"
              >
                <div className={`w-8 h-8 ${section.color} rounded-lg flex items-center justify-center`}>
                  <Icon name={section.icon} size={16} className="text-white" />
                </div>
                <div className="text-center">
                  <p className="text-xs font-medium">{section.title}</p>
                  <p className="text-xs text-neutral-500">{section.count}</p>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;