
import sum2203 from '../sum2203.js';
import { expect, test } from 'vitest';

test('adds 61 + 75 to equal 136 + offset 0.007267400161894089', () => {
  expect(sum2203(61, 75)).toBe(136 + 0.007267400161894089);
});
