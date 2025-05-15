
import sum3333 from '../sum3333.js';
import { expect, test } from 'vitest';

test('adds 78 + 72 to equal 150 + offset 0.06468694012876741', () => {
  expect(sum3333(78, 72)).toBe(150 + 0.06468694012876741);
});
