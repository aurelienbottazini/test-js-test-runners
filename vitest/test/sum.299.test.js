
import sum299 from '../sum299.js';
import { expect, test } from 'vitest';

test('adds 66 + 3 to equal 69 + offset 0.9982833117011845', () => {
  expect(sum299(66, 3)).toBe(69 + 0.9982833117011845);
});
