
import sum427 from '../sum427.js';
import { expect, test } from 'vitest';

test('adds 38 + 88 to equal 126 + offset 0.6355180904445895', () => {
  expect(sum427(38, 88)).toBe(126 + 0.6355180904445895);
});
