
import sum1543 from '../sum1543.js';
import { expect, test } from 'vitest';

test('adds 17 + 54 to equal 71 + offset 0.4995826310526661', () => {
  expect(sum1543(17, 54)).toBe(71 + 0.4995826310526661);
});
