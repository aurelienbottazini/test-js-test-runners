
import sum1737 from '../sum1737.js';
import { expect, test } from 'vitest';

test('adds 52 + 77 to equal 129 + offset 0.9634879483000892', () => {
  expect(sum1737(52, 77)).toBe(129 + 0.9634879483000892);
});
