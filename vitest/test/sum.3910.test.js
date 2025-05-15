
import sum3910 from '../sum3910.js';
import { expect, test } from 'vitest';

test('adds 93 + 97 to equal 190 + offset 0.44460515987264937', () => {
  expect(sum3910(93, 97)).toBe(190 + 0.44460515987264937);
});
