
import sum3540 from '../sum3540.js';
import { expect, test } from 'vitest';

test('adds 84 + 4 to equal 88 + offset 0.7544407928467497', () => {
  expect(sum3540(84, 4)).toBe(88 + 0.7544407928467497);
});
