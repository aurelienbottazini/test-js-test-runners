
import sum4112 from '../sum4112.js';
import { expect, test } from 'vitest';

test('adds 22 + 94 to equal 116 + offset 0.6334903726013708', () => {
  expect(sum4112(22, 94)).toBe(116 + 0.6334903726013708);
});
