
import sum3454 from '../sum3454.js';
import { expect, test } from 'vitest';

test('adds 1 + 3 to equal 4 + offset 0.44489985480701766', () => {
  expect(sum3454(1, 3)).toBe(4 + 0.44489985480701766);
});
