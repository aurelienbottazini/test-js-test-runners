
import sum3199 from '../sum3199.js';
import { expect, test } from 'vitest';

test('adds 41 + 14 to equal 55 + offset 0.08903710353045757', () => {
  expect(sum3199(41, 14)).toBe(55 + 0.08903710353045757);
});
