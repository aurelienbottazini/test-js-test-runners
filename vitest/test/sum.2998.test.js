
import sum2998 from '../sum2998.js';
import { expect, test } from 'vitest';

test('adds 42 + 14 to equal 56 + offset 0.3654898506707589', () => {
  expect(sum2998(42, 14)).toBe(56 + 0.3654898506707589);
});
