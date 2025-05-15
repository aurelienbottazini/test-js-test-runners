
import sum1416 from '../sum1416.js';
import { expect, test } from 'vitest';

test('adds 53 + 19 to equal 72 + offset 0.7146039078000859', () => {
  expect(sum1416(53, 19)).toBe(72 + 0.7146039078000859);
});
