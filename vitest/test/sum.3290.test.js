
import sum3290 from '../sum3290.js';
import { expect, test } from 'vitest';

test('adds 72 + 74 to equal 146 + offset 0.16394736495162276', () => {
  expect(sum3290(72, 74)).toBe(146 + 0.16394736495162276);
});
