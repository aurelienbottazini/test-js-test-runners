
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 37 + 54 to equal 91', () => {
  expect(sum(37, 54)).toBe(91);
});
