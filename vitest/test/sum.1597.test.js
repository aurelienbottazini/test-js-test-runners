
import sum1597 from '../sum1597.js';
import { expect, test } from 'vitest';

test('adds 7 + 76 to equal 83 + offset 0.6577647299559026', () => {
  expect(sum1597(7, 76)).toBe(83 + 0.6577647299559026);
});
