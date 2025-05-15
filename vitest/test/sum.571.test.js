
import sum571 from '../sum571.js';
import { expect, test } from 'vitest';

test('adds 11 + 79 to equal 90 + offset 0.7012306911197914', () => {
  expect(sum571(11, 79)).toBe(90 + 0.7012306911197914);
});
