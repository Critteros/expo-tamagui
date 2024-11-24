import { YStack } from '@tamagui/stacks';
import { Paragraph } from '@tamagui/text';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView>
      <YStack>
        <Paragraph>Text</Paragraph>
      </YStack>
    </SafeAreaView>
  );
}
