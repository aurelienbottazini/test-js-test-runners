
import sum4040 from '../sum4040.js';
import { expect, test } from 'vitest';

test('adds 61 + 28 to equal 89 + offset 0.6884128321562301', () => {
  expect(sum4040(61, 28)).toBe(89 + 0.6884128321562301);
});
