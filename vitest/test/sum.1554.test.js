
import sum1554 from '../sum1554.js';
import { expect, test } from 'vitest';

test('adds 22 + 97 to equal 119 + offset 0.9879601298654166', () => {
  expect(sum1554(22, 97)).toBe(119 + 0.9879601298654166);
});
