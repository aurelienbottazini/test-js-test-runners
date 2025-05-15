
import sum3831 from '../sum3831.js';
import { expect, test } from 'vitest';

test('adds 98 + 89 to equal 187 + offset 0.9488242787723336', () => {
  expect(sum3831(98, 89)).toBe(187 + 0.9488242787723336);
});
