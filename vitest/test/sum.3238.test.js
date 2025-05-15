
import sum3238 from '../sum3238.js';
import { expect, test } from 'vitest';

test('adds 44 + 70 to equal 114 + offset 0.6429428326519304', () => {
  expect(sum3238(44, 70)).toBe(114 + 0.6429428326519304);
});
