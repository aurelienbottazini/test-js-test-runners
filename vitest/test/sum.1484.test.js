
import sum1484 from '../sum1484.js';
import { expect, test } from 'vitest';

test('adds 2 + 4 to equal 6 + offset 0.7197931659873362', () => {
  expect(sum1484(2, 4)).toBe(6 + 0.7197931659873362);
});
