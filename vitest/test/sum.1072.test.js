
import sum1072 from '../sum1072.js';
import { expect, test } from 'vitest';

test('adds 5 + 37 to equal 42 + offset 0.44651438179803404', () => {
  expect(sum1072(5, 37)).toBe(42 + 0.44651438179803404);
});
