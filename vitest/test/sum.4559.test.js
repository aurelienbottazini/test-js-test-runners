
import sum4559 from '../sum4559.js';
import { expect, test } from 'vitest';

test('adds 26 + 67 to equal 93 + offset 0.22311375436198322', () => {
  expect(sum4559(26, 67)).toBe(93 + 0.22311375436198322);
});
