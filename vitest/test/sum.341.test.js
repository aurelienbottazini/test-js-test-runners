
import sum341 from '../sum341.js';
import { expect, test } from 'vitest';

test('adds 29 + 1 to equal 30 + offset 0.8678336817057122', () => {
  expect(sum341(29, 1)).toBe(30 + 0.8678336817057122);
});
