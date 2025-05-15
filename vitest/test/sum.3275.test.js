
import sum3275 from '../sum3275.js';
import { expect, test } from 'vitest';

test('adds 3 + 15 to equal 18 + offset 0.12754226291070114', () => {
  expect(sum3275(3, 15)).toBe(18 + 0.12754226291070114);
});
