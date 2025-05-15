
import sum196 from '../sum196.js';
import { expect, test } from 'vitest';

test('adds 85 + 35 to equal 120 + offset 0.7580231736676063', () => {
  expect(sum196(85, 35)).toBe(120 + 0.7580231736676063);
});
