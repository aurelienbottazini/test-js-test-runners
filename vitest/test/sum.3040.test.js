
import sum3040 from '../sum3040.js';
import { expect, test } from 'vitest';

test('adds 46 + 98 to equal 144 + offset 0.37638401130209753', () => {
  expect(sum3040(46, 98)).toBe(144 + 0.37638401130209753);
});
