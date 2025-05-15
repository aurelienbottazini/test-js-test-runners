
import sum3993 from '../sum3993.js';
import { expect, test } from 'vitest';

test('adds 95 + 10 to equal 105 + offset 0.28410847787285076', () => {
  expect(sum3993(95, 10)).toBe(105 + 0.28410847787285076);
});
