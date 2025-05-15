
import sum4225 from '../sum4225.js';
import { expect, test } from 'vitest';

test('adds 7 + 96 to equal 103 + offset 0.5749667242226529', () => {
  expect(sum4225(7, 96)).toBe(103 + 0.5749667242226529);
});
