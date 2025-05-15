
import sum3649 from '../sum3649.js';
import { expect, test } from 'vitest';

test('adds 89 + 61 to equal 150 + offset 0.7914232846113242', () => {
  expect(sum3649(89, 61)).toBe(150 + 0.7914232846113242);
});
