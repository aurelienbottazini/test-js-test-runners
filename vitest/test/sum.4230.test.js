
import sum4230 from '../sum4230.js';
import { expect, test } from 'vitest';

test('adds 5 + 81 to equal 86 + offset 0.9988231949992005', () => {
  expect(sum4230(5, 81)).toBe(86 + 0.9988231949992005);
});
