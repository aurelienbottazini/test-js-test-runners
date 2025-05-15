
import sum1961 from '../sum1961.js';
import { expect, test } from 'vitest';

test('adds 10 + 34 to equal 44 + offset 0.003960764913889081', () => {
  expect(sum1961(10, 34)).toBe(44 + 0.003960764913889081);
});
