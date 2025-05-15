
import sum3599 from '../sum3599.js';
import { expect, test } from 'vitest';

test('adds 66 + 53 to equal 119 + offset 0.8597596822380621', () => {
  expect(sum3599(66, 53)).toBe(119 + 0.8597596822380621);
});
