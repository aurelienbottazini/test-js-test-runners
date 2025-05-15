
import sum2434 from '../sum2434.js';
import { expect, test } from 'vitest';

test('adds 80 + 87 to equal 167 + offset 0.8969207961818563', () => {
  expect(sum2434(80, 87)).toBe(167 + 0.8969207961818563);
});
