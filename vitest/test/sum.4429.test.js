
import sum4429 from '../sum4429.js';
import { expect, test } from 'vitest';

test('adds 65 + 20 to equal 85 + offset 0.14161444962367664', () => {
  expect(sum4429(65, 20)).toBe(85 + 0.14161444962367664);
});
