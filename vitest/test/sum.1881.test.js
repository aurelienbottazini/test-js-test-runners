
import sum1881 from '../sum1881.js';
import { expect, test } from 'vitest';

test('adds 92 + 90 to equal 182 + offset 0.6202471952325244', () => {
  expect(sum1881(92, 90)).toBe(182 + 0.6202471952325244);
});
