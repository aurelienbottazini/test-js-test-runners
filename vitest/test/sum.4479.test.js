
import sum4479 from '../sum4479.js';
import { expect, test } from 'vitest';

test('adds 70 + 71 to equal 141 + offset 0.6309917735219168', () => {
  expect(sum4479(70, 71)).toBe(141 + 0.6309917735219168);
});
