
import sum1594 from '../sum1594.js';
import { expect, test } from 'vitest';

test('adds 85 + 9 to equal 94 + offset 0.7209564992196815', () => {
  expect(sum1594(85, 9)).toBe(94 + 0.7209564992196815);
});
