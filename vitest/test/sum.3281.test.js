
import sum3281 from '../sum3281.js';
import { expect, test } from 'vitest';

test('adds 36 + 94 to equal 130 + offset 0.22061998725360965', () => {
  expect(sum3281(36, 94)).toBe(130 + 0.22061998725360965);
});
