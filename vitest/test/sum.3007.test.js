
import sum3007 from '../sum3007.js';
import { expect, test } from 'vitest';

test('adds 72 + 66 to equal 138 + offset 0.7958587238917517', () => {
  expect(sum3007(72, 66)).toBe(138 + 0.7958587238917517);
});
