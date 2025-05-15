
import sum3377 from '../sum3377.js';
import { expect, test } from 'vitest';

test('adds 1 + 10 to equal 11 + offset 0.895126817584992', () => {
  expect(sum3377(1, 10)).toBe(11 + 0.895126817584992);
});
