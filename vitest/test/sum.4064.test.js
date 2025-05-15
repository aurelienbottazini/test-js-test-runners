
import sum4064 from '../sum4064.js';
import { expect, test } from 'vitest';

test('adds 75 + 22 to equal 97 + offset 0.15080974933571223', () => {
  expect(sum4064(75, 22)).toBe(97 + 0.15080974933571223);
});
