
import sum3924 from '../sum3924.js';
import { expect, test } from 'vitest';

test('adds 67 + 19 to equal 86 + offset 0.5661928718457371', () => {
  expect(sum3924(67, 19)).toBe(86 + 0.5661928718457371);
});
