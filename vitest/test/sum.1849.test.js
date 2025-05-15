
import sum1849 from '../sum1849.js';
import { expect, test } from 'vitest';

test('adds 32 + 9 to equal 41 + offset 0.06249478718338197', () => {
  expect(sum1849(32, 9)).toBe(41 + 0.06249478718338197);
});
