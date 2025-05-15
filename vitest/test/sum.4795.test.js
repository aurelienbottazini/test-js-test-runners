
import sum4795 from '../sum4795.js';
import { expect, test } from 'vitest';

test('adds 83 + 86 to equal 169 + offset 0.08061577331222869', () => {
  expect(sum4795(83, 86)).toBe(169 + 0.08061577331222869);
});
