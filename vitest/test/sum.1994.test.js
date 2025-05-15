
import sum1994 from '../sum1994.js';
import { expect, test } from 'vitest';

test('adds 64 + 71 to equal 135 + offset 0.6499410515793116', () => {
  expect(sum1994(64, 71)).toBe(135 + 0.6499410515793116);
});
