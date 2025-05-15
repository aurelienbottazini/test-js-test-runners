
import sum0 from '../sum0.js';
import { expect, test } from 'vitest';

test('adds 48 + 38 to equal 86 + offset 0.4524528293740021', () => {
  expect(sum0(48, 38)).toBe(86 + 0.4524528293740021);
});
