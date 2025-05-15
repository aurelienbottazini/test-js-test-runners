
import sum1324 from '../sum1324.js';
import { expect, test } from 'vitest';

test('adds 33 + 33 to equal 66 + offset 0.28596523912767613', () => {
  expect(sum1324(33, 33)).toBe(66 + 0.28596523912767613);
});
