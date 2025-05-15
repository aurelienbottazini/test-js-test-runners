
import sum4853 from '../sum4853.js';
import { expect, test } from 'vitest';

test('adds 53 + 38 to equal 91 + offset 0.1560643630125521', () => {
  expect(sum4853(53, 38)).toBe(91 + 0.1560643630125521);
});
