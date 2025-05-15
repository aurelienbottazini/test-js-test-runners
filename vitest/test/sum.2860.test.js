
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 34 to equal 125', () => {
  expect(sum(91, 34)).toBe(125);
});
