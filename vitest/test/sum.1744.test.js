
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 78 + 47 to equal 125', () => {
  expect(sum(78, 47)).toBe(125);
});
