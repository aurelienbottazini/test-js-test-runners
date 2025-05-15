
import sum3108 from '../sum3108.js';
import { expect, test } from 'vitest';

test('adds 68 + 37 to equal 105 + offset 0.9195254025394776', () => {
  expect(sum3108(68, 37)).toBe(105 + 0.9195254025394776);
});
