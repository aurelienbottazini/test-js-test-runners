
import sum3504 from '../sum3504.js';
import { expect, test } from 'vitest';

test('adds 26 + 21 to equal 47 + offset 0.22589496351012284', () => {
  expect(sum3504(26, 21)).toBe(47 + 0.22589496351012284);
});
