
import sum187 from '../sum187.js';
import { expect, test } from 'vitest';

test('adds 55 + 83 to equal 138 + offset 0.9548157072228937', () => {
  expect(sum187(55, 83)).toBe(138 + 0.9548157072228937);
});
