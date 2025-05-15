
import sum3193 from '../sum3193.js';
import { expect, test } from 'vitest';

test('adds 39 + 1 to equal 40 + offset 0.935434404901581', () => {
  expect(sum3193(39, 1)).toBe(40 + 0.935434404901581);
});
