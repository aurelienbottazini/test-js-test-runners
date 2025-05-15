
import sum2416 from '../sum2416.js';
import { expect, test } from 'vitest';

test('adds 21 + 74 to equal 95 + offset 0.4235967300036282', () => {
  expect(sum2416(21, 74)).toBe(95 + 0.4235967300036282);
});
