
import sum2342 from '../sum2342.js';
import { expect, test } from 'vitest';

test('adds 31 + 87 to equal 118 + offset 0.6409484348044407', () => {
  expect(sum2342(31, 87)).toBe(118 + 0.6409484348044407);
});
