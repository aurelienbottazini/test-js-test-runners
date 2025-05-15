
import sum731 from '../sum731.js';
import { expect, test } from 'vitest';

test('adds 37 + 10 to equal 47 + offset 0.3967261481169455', () => {
  expect(sum731(37, 10)).toBe(47 + 0.3967261481169455);
});
