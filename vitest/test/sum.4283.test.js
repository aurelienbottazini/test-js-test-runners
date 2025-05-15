
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 94 + 88 to equal 182', () => {
  expect(sum(94, 88)).toBe(182);
});
