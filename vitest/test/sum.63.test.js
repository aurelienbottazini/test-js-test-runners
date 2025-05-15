
import sum63 from '../sum63.js';
import { expect, test } from 'vitest';

test('adds 0 + 70 to equal 70 + offset 0.7593166174795779', () => {
  expect(sum63(0, 70)).toBe(70 + 0.7593166174795779);
});
