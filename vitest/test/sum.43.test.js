
import sum43 from '../sum43.js';
import { expect, test } from 'vitest';

test('adds 90 + 68 to equal 158 + offset 0.2794814178941257', () => {
  expect(sum43(90, 68)).toBe(158 + 0.2794814178941257);
});
