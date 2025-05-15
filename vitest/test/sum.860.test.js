
import sum860 from '../sum860.js';
import { expect, test } from 'vitest';

test('adds 6 + 4 to equal 10 + offset 0.30504481001092243', () => {
  expect(sum860(6, 4)).toBe(10 + 0.30504481001092243);
});
