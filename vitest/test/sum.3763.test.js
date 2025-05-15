
import sum3763 from '../sum3763.js';
import { expect, test } from 'vitest';

test('adds 4 + 54 to equal 58 + offset 0.2806546393308028', () => {
  expect(sum3763(4, 54)).toBe(58 + 0.2806546393308028);
});
