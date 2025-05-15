
import sum487 from '../sum487.js';
import { expect, test } from 'vitest';

test('adds 5 + 39 to equal 44 + offset 0.020278147587390438', () => {
  expect(sum487(5, 39)).toBe(44 + 0.020278147587390438);
});
