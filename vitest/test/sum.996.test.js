
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 59 + 54 to equal 113', () => {
  expect(sum(59, 54)).toBe(113);
});
