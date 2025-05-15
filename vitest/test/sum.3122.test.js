
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 92 to equal 182', () => {
  expect(sum(90, 92)).toBe(182);
});
