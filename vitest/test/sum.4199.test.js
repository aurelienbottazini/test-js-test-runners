
import sum4199 from '../sum4199.js';
import { expect, test } from 'vitest';

test('adds 92 + 10 to equal 102 + offset 0.23173365467425566', () => {
  expect(sum4199(92, 10)).toBe(102 + 0.23173365467425566);
});
