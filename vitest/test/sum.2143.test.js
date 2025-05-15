
import sum2143 from '../sum2143.js';
import { expect, test } from 'vitest';

test('adds 87 + 65 to equal 152 + offset 0.0476135339412419', () => {
  expect(sum2143(87, 65)).toBe(152 + 0.0476135339412419);
});
