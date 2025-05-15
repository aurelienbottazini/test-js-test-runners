
import sum4319 from '../sum4319.js';
import { expect, test } from 'vitest';

test('adds 4 + 97 to equal 101 + offset 0.5361340622467425', () => {
  expect(sum4319(4, 97)).toBe(101 + 0.5361340622467425);
});
