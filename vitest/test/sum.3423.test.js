
import sum3423 from '../sum3423.js';
import { expect, test } from 'vitest';

test('adds 52 + 67 to equal 119 + offset 0.03077890550380591', () => {
  expect(sum3423(52, 67)).toBe(119 + 0.03077890550380591);
});
