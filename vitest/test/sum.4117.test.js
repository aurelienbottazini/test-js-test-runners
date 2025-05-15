
import sum4117 from '../sum4117.js';
import { expect, test } from 'vitest';

test('adds 14 + 74 to equal 88 + offset 0.9303416562551328', () => {
  expect(sum4117(14, 74)).toBe(88 + 0.9303416562551328);
});
