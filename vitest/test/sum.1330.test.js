
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 5 + 54 to equal 59', () => {
  expect(sum(5, 54)).toBe(59);
});
