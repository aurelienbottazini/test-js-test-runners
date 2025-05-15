
import sum2408 from '../sum2408.js';
import { expect, test } from 'vitest';

test('adds 51 + 83 to equal 134 + offset 0.7752030595118312', () => {
  expect(sum2408(51, 83)).toBe(134 + 0.7752030595118312);
});
