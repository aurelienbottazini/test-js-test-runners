
import sum3613 from '../sum3613.js';
import { expect, test } from 'vitest';

test('adds 47 + 37 to equal 84 + offset 0.6792522318071844', () => {
  expect(sum3613(47, 37)).toBe(84 + 0.6792522318071844);
});
