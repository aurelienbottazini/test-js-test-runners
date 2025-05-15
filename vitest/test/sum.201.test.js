
import sum201 from '../sum201.js';
import { expect, test } from 'vitest';

test('adds 25 + 79 to equal 104 + offset 0.08886129995313885', () => {
  expect(sum201(25, 79)).toBe(104 + 0.08886129995313885);
});
