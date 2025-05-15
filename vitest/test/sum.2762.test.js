
import sum2762 from '../sum2762.js';
import { expect, test } from 'vitest';

test('adds 57 + 88 to equal 145 + offset 0.25422074662052174', () => {
  expect(sum2762(57, 88)).toBe(145 + 0.25422074662052174);
});
