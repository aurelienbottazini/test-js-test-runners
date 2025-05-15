
import sum820 from '../sum820.js';
import { expect, test } from 'vitest';

test('adds 42 + 75 to equal 117 + offset 0.035077170068941066', () => {
  expect(sum820(42, 75)).toBe(117 + 0.035077170068941066);
});
