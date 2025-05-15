
import sum1460 from '../sum1460.js';
import { expect, test } from 'vitest';

test('adds 57 + 83 to equal 140 + offset 0.7606298347694204', () => {
  expect(sum1460(57, 83)).toBe(140 + 0.7606298347694204);
});
