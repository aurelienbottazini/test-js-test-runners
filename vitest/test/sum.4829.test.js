
import sum4829 from '../sum4829.js';
import { expect, test } from 'vitest';

test('adds 45 + 85 to equal 130 + offset 0.018292507607653108', () => {
  expect(sum4829(45, 85)).toBe(130 + 0.018292507607653108);
});
