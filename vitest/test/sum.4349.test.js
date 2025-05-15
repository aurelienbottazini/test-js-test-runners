
import sum4349 from '../sum4349.js';
import { expect, test } from 'vitest';

test('adds 72 + 44 to equal 116 + offset 0.26501459323635024', () => {
  expect(sum4349(72, 44)).toBe(116 + 0.26501459323635024);
});
