import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'client' | 'driver' | 'partner' | 'admin';

export interface User {
  id: string;
  phone: string;
  name: string;
  role: UserRole;
  avatar?: string;
  verified: boolean;
  permissions?: string[];
  metadata?: {
    rating?: number;
    totalTrips?: number;
    balance?: number;
    bonuses?: number;
  };
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateUser: (updates: Partial<User>) => void;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: UserRole | UserRole[]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Проверяем сохраненные данные пользователя
    const savedUser = localStorage.getItem('ets_user');
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Ошибка загрузки данных пользователя:', error);
        localStorage.removeItem('ets_user');
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData: User) => {
    // Добавляем права доступа в зависимости от роли
    const permissions = getPermissionsByRole(userData.role);
    const userWithPermissions = {
      ...userData,
      permissions,
      metadata: {
        rating: 4.9,
        totalTrips: 127,
        balance: 2850,
        bonuses: 1240,
        ...userData.metadata
      }
    };

    setUser(userWithPermissions);
    localStorage.setItem('ets_user', JSON.stringify(userWithPermissions));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ets_user');
  };

  const updateUser = (updates: Partial<User>) => {
    if (!user) return;
    
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('ets_user', JSON.stringify(updatedUser));
  };

  const hasPermission = (permission: string): boolean => {
    if (!user || !user.permissions) return false;
    return user.permissions.includes(permission) || user.permissions.includes('*');
  };

  const hasRole = (roles: UserRole | UserRole[]): boolean => {
    if (!user) return false;
    const roleArray = Array.isArray(roles) ? roles : [roles];
    return roleArray.includes(user.role);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    updateUser,
    hasPermission,
    hasRole
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Хук для использования контекста авторизации
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }
  return context;
};

// Функция для получения прав доступа по роли
const getPermissionsByRole = (role: UserRole): string[] => {
  const permissions: Record<UserRole, string[]> = {
    client: [
      'services.book',
      'services.track',
      'payments.view',
      'payments.pay',
      'profile.edit',
      'support.contact'
    ],
    driver: [
      'orders.view',
      'orders.accept',
      'orders.complete',
      'navigation.access',
      'earnings.view',
      'profile.edit',
      'support.contact'
    ],
    partner: [
      'services.manage',
      'orders.manage',
      'analytics.view',
      'finances.view',
      'staff.manage',
      'inventory.manage',
      'profile.edit',
      'support.contact'
    ],
    admin: ['*'] // Все права доступа
  };

  return permissions[role] || [];
};

// Хук для проверки прав доступа
export const usePermissions = () => {
  const { hasPermission, hasRole } = useAuth();
  
  return {
    hasPermission,
    hasRole,
    canManageServices: () => hasPermission('services.manage') || hasRole('admin'),
    canViewAnalytics: () => hasPermission('analytics.view') || hasRole(['partner', 'admin']),
    canManageUsers: () => hasPermission('users.manage') || hasRole('admin'),
    canViewFinances: () => hasPermission('finances.view') || hasRole(['partner', 'admin']),
    isDriver: () => hasRole('driver'),
    isPartner: () => hasRole('partner'),
    isAdmin: () => hasRole('admin'),
    isClient: () => hasRole('client')
  };
};