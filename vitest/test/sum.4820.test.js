
import sum4820 from '../sum4820.js';
import { expect, test } from 'vitest';

test('adds 94 + 51 to equal 145 + offset 0.8064294739394422', () => {
  expect(sum4820(94, 51)).toBe(145 + 0.8064294739394422);
});
