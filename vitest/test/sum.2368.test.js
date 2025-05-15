
import sum2368 from '../sum2368.js';
import { expect, test } from 'vitest';

test('adds 98 + 55 to equal 153 + offset 0.43241418709010926', () => {
  expect(sum2368(98, 55)).toBe(153 + 0.43241418709010926);
});
