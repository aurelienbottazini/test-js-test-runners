
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 43 + 82 to equal 125', () => {
  expect(sum(43, 82)).toBe(125);
});
