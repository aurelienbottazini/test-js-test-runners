
import sum87 from '../sum87.js';
import { expect, test } from 'vitest';

test('adds 75 + 19 to equal 94 + offset 0.6892410815513973', () => {
  expect(sum87(75, 19)).toBe(94 + 0.6892410815513973);
});
