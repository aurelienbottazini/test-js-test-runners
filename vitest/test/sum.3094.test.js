
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 86 to equal 182', () => {
  expect(sum(96, 86)).toBe(182);
});
