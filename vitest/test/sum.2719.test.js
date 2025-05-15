
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 91 to equal 179', () => {
  expect(sum(88, 91)).toBe(179);
});
