
import sum218 from '../sum218.js';
import { expect, test } from 'vitest';

test('adds 60 + 69 to equal 129 + offset 0.10984625980699869', () => {
  expect(sum218(60, 69)).toBe(129 + 0.10984625980699869);
});
