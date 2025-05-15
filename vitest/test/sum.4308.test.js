
import sum4308 from '../sum4308.js';
import { expect, test } from 'vitest';

test('adds 6 + 29 to equal 35 + offset 0.2551490193126984', () => {
  expect(sum4308(6, 29)).toBe(35 + 0.2551490193126984);
});
