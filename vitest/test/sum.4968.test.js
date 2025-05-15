
import sum4968 from '../sum4968.js';
import { expect, test } from 'vitest';

test('adds 40 + 38 to equal 78 + offset 0.12921132346928033', () => {
  expect(sum4968(40, 38)).toBe(78 + 0.12921132346928033);
});
