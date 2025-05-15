
import sum4203 from '../sum4203.js';
import { expect, test } from 'vitest';

test('adds 81 + 91 to equal 172 + offset 0.6124908502410631', () => {
  expect(sum4203(81, 91)).toBe(172 + 0.6124908502410631);
});
