
import sum516 from '../sum516.js';
import { expect, test } from 'vitest';

test('adds 37 + 35 to equal 72 + offset 0.3920940604719775', () => {
  expect(sum516(37, 35)).toBe(72 + 0.3920940604719775);
});
