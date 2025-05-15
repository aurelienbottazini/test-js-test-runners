
import sum1406 from '../sum1406.js';
import { expect, test } from 'vitest';

test('adds 68 + 98 to equal 166 + offset 0.11871639455698224', () => {
  expect(sum1406(68, 98)).toBe(166 + 0.11871639455698224);
});
