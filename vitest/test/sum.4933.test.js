
import sum4933 from '../sum4933.js';
import { expect, test } from 'vitest';

test('adds 57 + 39 to equal 96 + offset 0.6361474192039126', () => {
  expect(sum4933(57, 39)).toBe(96 + 0.6361474192039126);
});
