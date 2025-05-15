
import sum1004 from '../sum1004.js';
import { expect, test } from 'vitest';

test('adds 77 + 6 to equal 83 + offset 0.9410608083254864', () => {
  expect(sum1004(77, 6)).toBe(83 + 0.9410608083254864);
});
