
import sum330 from '../sum330.js';
import { expect, test } from 'vitest';

test('adds 98 + 15 to equal 113 + offset 0.6295571872139883', () => {
  expect(sum330(98, 15)).toBe(113 + 0.6295571872139883);
});
