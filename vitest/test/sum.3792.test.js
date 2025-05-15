
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 85 + 97 to equal 182', () => {
  expect(sum(85, 97)).toBe(182);
});
