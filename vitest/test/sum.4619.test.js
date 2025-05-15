
import sum4619 from '../sum4619.js';
import { expect, test } from 'vitest';

test('adds 41 + 7 to equal 48 + offset 0.46151448020006103', () => {
  expect(sum4619(41, 7)).toBe(48 + 0.46151448020006103);
});
