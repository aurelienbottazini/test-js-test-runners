
import sum780 from '../sum780.js';
import { expect, test } from 'vitest';

test('adds 70 + 9 to equal 79 + offset 0.8190576386813644', () => {
  expect(sum780(70, 9)).toBe(79 + 0.8190576386813644);
});
