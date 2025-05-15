
import sum3965 from '../sum3965.js';
import { expect, test } from 'vitest';

test('adds 11 + 66 to equal 77 + offset 0.6894226105715451', () => {
  expect(sum3965(11, 66)).toBe(77 + 0.6894226105715451);
});
