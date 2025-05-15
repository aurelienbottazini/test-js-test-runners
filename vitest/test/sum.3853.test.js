
import sum3853 from '../sum3853.js';
import { expect, test } from 'vitest';

test('adds 75 + 16 to equal 91 + offset 0.4041385051862173', () => {
  expect(sum3853(75, 16)).toBe(91 + 0.4041385051862173);
});
