
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 70 to equal 131', () => {
  expect(sum(61, 70)).toBe(131);
});
