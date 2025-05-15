
import sum4091 from '../sum4091.js';
import { expect, test } from 'vitest';

test('adds 37 + 1 to equal 38 + offset 0.15971521125308996', () => {
  expect(sum4091(37, 1)).toBe(38 + 0.15971521125308996);
});
