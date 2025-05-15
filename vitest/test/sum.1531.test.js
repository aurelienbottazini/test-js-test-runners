
import sum1531 from '../sum1531.js';
import { expect, test } from 'vitest';

test('adds 56 + 16 to equal 72 + offset 0.3172844551695455', () => {
  expect(sum1531(56, 16)).toBe(72 + 0.3172844551695455);
});
