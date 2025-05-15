
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 54 to equal 146', () => {
  expect(sum(92, 54)).toBe(146);
});
