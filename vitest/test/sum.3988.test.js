
import sum3988 from '../sum3988.js';
import { expect, test } from 'vitest';

test('adds 99 + 60 to equal 159 + offset 0.7532133640154055', () => {
  expect(sum3988(99, 60)).toBe(159 + 0.7532133640154055);
});
