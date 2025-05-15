
import sum687 from '../sum687.js';
import { expect, test } from 'vitest';

test('adds 43 + 13 to equal 56 + offset 0.52753910910373', () => {
  expect(sum687(43, 13)).toBe(56 + 0.52753910910373);
});
