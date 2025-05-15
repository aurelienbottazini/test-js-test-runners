
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 54 to equal 102', () => {
  expect(sum(48, 54)).toBe(102);
});
