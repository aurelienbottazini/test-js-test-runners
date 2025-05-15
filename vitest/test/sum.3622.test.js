
import sum3622 from '../sum3622.js';
import { expect, test } from 'vitest';

test('adds 75 + 15 to equal 90 + offset 0.022680631251719596', () => {
  expect(sum3622(75, 15)).toBe(90 + 0.022680631251719596);
});
