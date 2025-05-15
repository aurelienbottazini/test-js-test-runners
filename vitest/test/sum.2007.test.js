
import sum2007 from '../sum2007.js';
import { expect, test } from 'vitest';

test('adds 23 + 38 to equal 61 + offset 0.5175920557708843', () => {
  expect(sum2007(23, 38)).toBe(61 + 0.5175920557708843);
});
