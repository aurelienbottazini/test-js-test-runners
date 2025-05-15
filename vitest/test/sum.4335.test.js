
import sum4335 from '../sum4335.js';
import { expect, test } from 'vitest';

test('adds 37 + 95 to equal 132 + offset 0.5637388251414466', () => {
  expect(sum4335(37, 95)).toBe(132 + 0.5637388251414466);
});
