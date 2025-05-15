
import sum31 from '../sum31.js';
import { expect, test } from 'vitest';

test('adds 70 + 8 to equal 78 + offset 0.6378146432681857', () => {
  expect(sum31(70, 8)).toBe(78 + 0.6378146432681857);
});
