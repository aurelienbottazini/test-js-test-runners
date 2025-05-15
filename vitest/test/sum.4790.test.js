
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 87 to equal 131', () => {
  expect(sum(44, 87)).toBe(131);
});
