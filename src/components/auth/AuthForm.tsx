import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface AuthFormProps {
  onAuth: (user: any) => void;
  onClose?: () => void;
}

const AuthForm = ({ onAuth, onClose }: AuthFormProps) => {
  const [phone, setPhone] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const [showSmsStep, setShowSmsStep] = useState(false);
  const [userType, setUserType] = useState<'client' | 'driver' | 'partner' | 'admin'>('client');
  const [loading, setLoading] = useState(false);

  const handleSendSms = async () => {
    if (!phone) return;
    setLoading(true);
    
    // Симуляция отправки SMS
    setTimeout(() => {
      setShowSmsStep(true);
      setLoading(false);
    }, 1500);
  };

  const handleVerifySms = async () => {
    if (!smsCode) return;
    setLoading(true);

    // Симуляция проверки SMS
    setTimeout(() => {
      const mockUser = {
        id: Math.random().toString(36),
        phone,
        role: userType,
        name: userType === 'admin' ? 'Администратор ЕТС' : 'Пользователь ЕТС',
        avatar: null,
        verified: true
      };
      onAuth(mockUser);
      setLoading(false);
    }, 1000);
  };

  const handleSocialAuth = (provider: string) => {
    setLoading(true);
    
    // Симуляция социальной авторизации
    setTimeout(() => {
      const mockUser = {
        id: Math.random().toString(36),
        phone: '+7 (999) 123-45-67',
        role: userType,
        name: `Пользователь ${provider}`,
        avatar: null,
        verified: true
      };
      onAuth(mockUser);
      setLoading(false);
    }, 1500);
  };

  const userTypes = [
    { id: 'client', name: 'Пользователь', icon: 'User', description: 'Заказ услуг' },
    { id: 'driver', name: 'Водитель', icon: 'Car', description: 'Выполнение заказов' },
    { id: 'partner', name: 'Партнер', icon: 'Building', description: 'Бизнес-аккаунт' },
    { id: 'admin', name: 'Администратор', icon: 'Shield', description: 'Управление системой' }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-ets-gradient rounded-xl flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">E</span>
              </div>
              <CardTitle className="text-xl font-display font-bold text-neutral-900">
                Вход в ЕТС
              </CardTitle>
            </div>
            {onClose && (
              <Button variant="ghost" size="sm" onClick={onClose}>
                <Icon name="X" size={20} />
              </Button>
            )}
          </div>

          {/* User Type Selection */}
          <div className="space-y-3">
            <Label className="text-sm font-medium text-neutral-700">Тип аккаунта</Label>
            <div className="grid grid-cols-2 gap-2">
              {userTypes.map((type) => (
                <Button
                  key={type.id}
                  variant={userType === type.id ? "default" : "outline"}
                  size="sm"
                  className={`h-auto p-3 flex-col space-y-1 ${
                    userType === type.id 
                      ? 'bg-ets-gradient border-primary-600' 
                      : 'hover:bg-neutral-50'
                  }`}
                  onClick={() => setUserType(type.id as any)}
                >
                  <Icon 
                    name={type.icon} 
                    size={16} 
                    className={userType === type.id ? 'text-white' : 'text-neutral-600'} 
                  />
                  <span className={`text-xs font-medium ${
                    userType === type.id ? 'text-white' : 'text-neutral-700'
                  }`}>
                    {type.name}
                  </span>
                </Button>
              ))}
            </div>
            <p className="text-xs text-neutral-500 text-center">
              {userTypes.find(t => t.id === userType)?.description}
            </p>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <Tabs defaultValue="phone" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="phone">Телефон</TabsTrigger>
              <TabsTrigger value="social">Соцсети</TabsTrigger>
            </TabsList>

            <TabsContent value="phone" className="space-y-4 mt-6">
              {!showSmsStep ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Номер телефона</Label>
                    <Input
                      id="phone"
                      placeholder="+7 (999) 123-45-67"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="text-center"
                    />
                  </div>
                  <Button 
                    onClick={handleSendSms}
                    disabled={!phone || loading}
                    className="w-full bg-ets-gradient hover:opacity-90"
                  >
                    {loading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Отправляем SMS...</span>
                      </div>
                    ) : (
                      'Получить код'
                    )}
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                      <Icon name="MessageSquare" size={24} className="text-success" />
                    </div>
                    <h3 className="font-medium text-neutral-900">Код отправлен</h3>
                    <p className="text-sm text-neutral-600">
                      SMS с кодом отправлено на номер<br/>
                      <span className="font-medium">{phone}</span>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sms">Код из SMS</Label>
                    <Input
                      id="sms"
                      placeholder="1234"
                      value={smsCode}
                      onChange={(e) => setSmsCode(e.target.value)}
                      className="text-center text-lg tracking-widest"
                      maxLength={4}
                    />
                  </div>

                  <div className="space-y-3">
                    <Button 
                      onClick={handleVerifySms}
                      disabled={!smsCode || loading}
                      className="w-full bg-ets-gradient hover:opacity-90"
                    >
                      {loading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Проверяем...</span>
                        </div>
                      ) : (
                        'Войти'
                      )}
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full text-neutral-600"
                      onClick={() => setShowSmsStep(false)}
                    >
                      Изменить номер
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="social" className="space-y-4 mt-6">
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start space-x-3 h-12"
                  onClick={() => handleSocialAuth('VK')}
                  disabled={loading}
                >
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VK</span>
                  </div>
                  <span>Войти через ВКонтакте</span>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start space-x-3 h-12"
                  onClick={() => handleSocialAuth('Telegram')}
                  disabled={loading}
                >
                  <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
                    <Icon name="Send" size={14} className="text-white" />
                  </div>
                  <span>Войти через Telegram</span>
                </Button>

                <Button 
                  variant="outline" 
                  className="w-full justify-start space-x-3 h-12"
                  onClick={() => handleSocialAuth('Яндекс')}
                  disabled={loading}
                >
                  <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">Я</span>
                  </div>
                  <span>Войти через Яндекс</span>
                </Button>
              </div>

              <Separator />
              
              <div className="text-center">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => setShowSmsStep(false)}
                  className="text-neutral-600"
                >
                  Войти по номеру телефона
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {userType === 'admin' && (
            <div className="bg-warning-50 border border-warning-200 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-warning-600" />
                <span className="text-sm font-medium text-warning-800">
                  Вход для администраторов
                </span>
              </div>
              <p className="text-xs text-warning-700 mt-1">
                Дополнительная проверка безопасности
              </p>
            </div>
          )}

          <div className="text-center text-xs text-neutral-500">
            Входя в систему, вы соглашаетесь с{' '}
            <a href="#" className="text-primary hover:underline">
              условиями использования
            </a>{' '}
            и{' '}
            <a href="#" className="text-primary hover:underline">
              политикой конфиденциальности
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AuthForm;