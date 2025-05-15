
import sum3133 from '../sum3133.js';
import { expect, test } from 'vitest';

test('adds 78 + 70 to equal 148 + offset 0.08909826498437179', () => {
  expect(sum3133(78, 70)).toBe(148 + 0.08909826498437179);
});
