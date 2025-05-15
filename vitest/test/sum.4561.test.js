
import sum4561 from '../sum4561.js';
import { expect, test } from 'vitest';

test('adds 44 + 49 to equal 93 + offset 0.6312942127314183', () => {
  expect(sum4561(44, 49)).toBe(93 + 0.6312942127314183);
});
