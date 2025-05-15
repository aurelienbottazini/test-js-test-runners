
import sum2293 from '../sum2293.js';
import { expect, test } from 'vitest';

test('adds 84 + 16 to equal 100 + offset 0.11839531507872758', () => {
  expect(sum2293(84, 16)).toBe(100 + 0.11839531507872758);
});
