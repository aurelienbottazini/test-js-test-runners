
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 90 to equal 179', () => {
  expect(sum(89, 90)).toBe(179);
});
