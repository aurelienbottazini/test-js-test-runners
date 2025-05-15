
import sum3388 from '../sum3388.js';
import { expect, test } from 'vitest';

test('adds 29 + 84 to equal 113 + offset 0.20703263624758383', () => {
  expect(sum3388(29, 84)).toBe(113 + 0.20703263624758383);
});
