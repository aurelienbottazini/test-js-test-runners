
import sum4092 from '../sum4092.js';
import { expect, test } from 'vitest';

test('adds 9 + 24 to equal 33 + offset 0.7777862467307349', () => {
  expect(sum4092(9, 24)).toBe(33 + 0.7777862467307349);
});
