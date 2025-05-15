
import sum4210 from '../sum4210.js';
import { expect, test } from 'vitest';

test('adds 35 + 79 to equal 114 + offset 0.897845442359067', () => {
  expect(sum4210(35, 79)).toBe(114 + 0.897845442359067);
});
