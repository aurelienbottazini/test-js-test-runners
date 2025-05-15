
import sum886 from '../sum886.js';
import { expect, test } from 'vitest';

test('adds 95 + 17 to equal 112 + offset 0.727460548643955', () => {
  expect(sum886(95, 17)).toBe(112 + 0.727460548643955);
});
