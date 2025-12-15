import { useState } from 'react';
import { Platform, Pressable, View, Text, Modal, ActionSheetIOS } from 'react-native';

type Props = {
  currentPath: string;
  onNavigate: (to: string) => void;
};

const items = [
  { label: 'Home', to: '/' },
  { label: 'Tournaments', to: '/tournaments' },
  { label: 'Profile', to: '/profile' },
];

export function HeaderMenu({ currentPath, onNavigate }: Props) {
  const [open, setOpen] = useState(false);

  const onSelect = (to: string) => {
    setOpen(false);
    if (to !== currentPath) onNavigate(to);
  };

  const showMenu = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: [...items.map(i => i.label), 'Cancel'],
          cancelButtonIndex: items.length,
        },
        (idx) => {
          if (idx < items.length) onSelect(items[idx].to);
        }
      );
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <Pressable
        onPress={showMenu}
        hitSlop={10}
        style={{ paddingHorizontal: 12, paddingVertical: 8 }}
        accessibilityLabel="Open menu"
      >
        <View style={{ gap: 3 }}>
          <View style={{ width: 20, height: 2, backgroundColor: '#000' }} />
          <View style={{ width: 20, height: 2, backgroundColor: '#000' }} />
          <View style={{ width: 20, height: 2, backgroundColor: '#000' }} />
        </View>
      </Pressable>

      <Modal transparent visible={open} animationType="fade" onRequestClose={() => setOpen(false)}>
        <Pressable style={{ flex:1, backgroundColor:'#0006' }} onPress={() => setOpen(false)}>
          <View style={{ position:'absolute', right:16, top:56, backgroundColor:'#fff', borderRadius:8, padding:8, minWidth:160 }}>
            {items.map((i) => (
              <Pressable key={i.to} onPress={() => onSelect(i.to)} style={{ padding:10 }}>
                <Text style={{ fontSize:16 }}>{i.label}</Text>
              </Pressable>
            ))}
          </View>
        </Pressable>
      </Modal>
    </>
  );
}