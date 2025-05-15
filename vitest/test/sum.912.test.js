
import sum912 from '../sum912.js';
import { expect, test } from 'vitest';

test('adds 75 + 17 to equal 92 + offset 0.39799041063257234', () => {
  expect(sum912(75, 17)).toBe(92 + 0.39799041063257234);
});
