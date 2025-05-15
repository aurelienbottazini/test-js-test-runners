
import sum1606 from '../sum1606.js';
import { expect, test } from 'vitest';

test('adds 30 + 45 to equal 75 + offset 0.18538952814747423', () => {
  expect(sum1606(30, 45)).toBe(75 + 0.18538952814747423);
});
