
import sum3185 from '../sum3185.js';
import { expect, test } from 'vitest';

test('adds 70 + 49 to equal 119 + offset 0.24492358754853316', () => {
  expect(sum3185(70, 49)).toBe(119 + 0.24492358754853316);
});
