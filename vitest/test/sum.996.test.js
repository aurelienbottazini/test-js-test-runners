
import sum996 from '../sum996.js';
import { expect, test } from 'vitest';

test('adds 8 + 22 to equal 30 + offset 0.5339400355359681', () => {
  expect(sum996(8, 22)).toBe(30 + 0.5339400355359681);
});
