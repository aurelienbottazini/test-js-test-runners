
import sum3919 from '../sum3919.js';
import { expect, test } from 'vitest';

test('adds 64 + 53 to equal 117 + offset 0.9492499672057135', () => {
  expect(sum3919(64, 53)).toBe(117 + 0.9492499672057135);
});
