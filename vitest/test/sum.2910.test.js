
import sum2910 from '../sum2910.js';
import { expect, test } from 'vitest';

test('adds 67 + 64 to equal 131 + offset 0.4203525050678931', () => {
  expect(sum2910(67, 64)).toBe(131 + 0.4203525050678931);
});
