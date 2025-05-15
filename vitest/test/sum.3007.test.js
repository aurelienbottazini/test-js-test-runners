
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 36 to equal 125', () => {
  expect(sum(89, 36)).toBe(125);
});
