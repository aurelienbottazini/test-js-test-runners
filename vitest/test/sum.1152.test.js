
import sum1152 from '../sum1152.js';
import { expect, test } from 'vitest';

test('adds 70 + 67 to equal 137 + offset 0.6346575890891654', () => {
  expect(sum1152(70, 67)).toBe(137 + 0.6346575890891654);
});
