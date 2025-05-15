
import sum2286 from '../sum2286.js';
import { expect, test } from 'vitest';

test('adds 5 + 4 to equal 9 + offset 0.816530685191826', () => {
  expect(sum2286(5, 4)).toBe(9 + 0.816530685191826);
});
