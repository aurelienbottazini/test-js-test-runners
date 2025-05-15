
import sum4276 from '../sum4276.js';
import { expect, test } from 'vitest';

test('adds 6 + 23 to equal 29 + offset 0.6152593718921059', () => {
  expect(sum4276(6, 23)).toBe(29 + 0.6152593718921059);
});
