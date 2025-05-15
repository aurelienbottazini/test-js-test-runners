
import sum590 from '../sum590.js';
import { expect, test } from 'vitest';

test('adds 72 + 96 to equal 168 + offset 0.9159518054212795', () => {
  expect(sum590(72, 96)).toBe(168 + 0.9159518054212795);
});
