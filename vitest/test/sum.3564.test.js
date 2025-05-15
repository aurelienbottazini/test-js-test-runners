
import sum3564 from '../sum3564.js';
import { expect, test } from 'vitest';

test('adds 91 + 60 to equal 151 + offset 0.7052814687804159', () => {
  expect(sum3564(91, 60)).toBe(151 + 0.7052814687804159);
});
