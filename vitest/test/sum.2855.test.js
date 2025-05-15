
import sum2855 from '../sum2855.js';
import { expect, test } from 'vitest';

test('adds 57 + 38 to equal 95 + offset 0.003523104806887001', () => {
  expect(sum2855(57, 38)).toBe(95 + 0.003523104806887001);
});
