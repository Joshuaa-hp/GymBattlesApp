import { Stack, useRouter, usePathname } from 'expo-router';
import { HeaderMenu } from '../components/HeaderMenu';

export default function RootLayout() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerRight: () => (
          <HeaderMenu
            currentPath={pathname}
            onNavigate={(to) => router.push(to)}
          />
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="tournaments" options={{ title: 'Tournaments' }} />
      <Stack.Screen name="profile" options={{ title: 'Profile' }} />
    </Stack>
  );
}