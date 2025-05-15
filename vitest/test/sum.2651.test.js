
import sum2651 from '../sum2651.js';
import { expect, test } from 'vitest';

test('adds 51 + 28 to equal 79 + offset 0.696657478491089', () => {
  expect(sum2651(51, 28)).toBe(79 + 0.696657478491089);
});
