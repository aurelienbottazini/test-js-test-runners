
import sum3742 from '../sum3742.js';
import { expect, test } from 'vitest';

test('adds 74 + 63 to equal 137 + offset 0.6482697394394021', () => {
  expect(sum3742(74, 63)).toBe(137 + 0.6482697394394021);
});
