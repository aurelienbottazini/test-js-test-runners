
import sum364 from '../sum364.js';
import { expect, test } from 'vitest';

test('adds 69 + 73 to equal 142 + offset 0.896292677214321', () => {
  expect(sum364(69, 73)).toBe(142 + 0.896292677214321);
});
