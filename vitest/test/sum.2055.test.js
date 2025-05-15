
import sum2055 from '../sum2055.js';
import { expect, test } from 'vitest';

test('adds 74 + 39 to equal 113 + offset 0.5443686626508828', () => {
  expect(sum2055(74, 39)).toBe(113 + 0.5443686626508828);
});
