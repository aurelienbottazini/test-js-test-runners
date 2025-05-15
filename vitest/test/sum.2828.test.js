
import sum2828 from '../sum2828.js';
import { expect, test } from 'vitest';

test('adds 90 + 64 to equal 154 + offset 0.18029361105530417', () => {
  expect(sum2828(90, 64)).toBe(154 + 0.18029361105530417);
});
