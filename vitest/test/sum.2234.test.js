
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 49 to equal 131', () => {
  expect(sum(82, 49)).toBe(131);
});
