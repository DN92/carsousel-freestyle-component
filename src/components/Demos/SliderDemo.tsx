import { Slider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <Slider
      defaultValue={40}
      marks={marks}
      labelTransition="fade"
      size={2}
      style = {{padding: '5rem'}}
      styles={(theme) => ({
        track: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
        },
        mark: {
          width: 6,
          height: 6,
          borderRadius: 6,
          transform: 'translateX(-3px) translateY(-2px)',
          borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
        },
        markFilled: {
          borderColor: theme.colors.blue[6],
        },
        markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
        thumb: {
          height: 16,
          width: 16,
          backgroundColor: theme.colors.red,
          borderWidth: 1,
          boxShadow: theme.shadows.sm,
        },
      })}
    />
  );
}

export default Demo
