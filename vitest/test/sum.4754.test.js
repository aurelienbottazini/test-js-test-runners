
import sum4754 from '../sum4754.js';
import { expect, test } from 'vitest';

test('adds 56 + 74 to equal 130 + offset 0.6417480149534374', () => {
  expect(sum4754(56, 74)).toBe(130 + 0.6417480149534374);
});
