
import sum2503 from '../sum2503.js';
import { expect, test } from 'vitest';

test('adds 14 + 99 to equal 113 + offset 0.793618210877432', () => {
  expect(sum2503(14, 99)).toBe(113 + 0.793618210877432);
});
