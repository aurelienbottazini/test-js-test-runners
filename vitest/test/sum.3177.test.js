
import sum3177 from '../sum3177.js';
import { expect, test } from 'vitest';

test('adds 29 + 70 to equal 99 + offset 0.7123376494929564', () => {
  expect(sum3177(29, 70)).toBe(99 + 0.7123376494929564);
});
