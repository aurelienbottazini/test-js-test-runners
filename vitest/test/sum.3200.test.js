
import sum3200 from '../sum3200.js';
import { expect, test } from 'vitest';

test('adds 14 + 70 to equal 84 + offset 0.8136352628909732', () => {
  expect(sum3200(14, 70)).toBe(84 + 0.8136352628909732);
});
