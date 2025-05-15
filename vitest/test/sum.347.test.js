
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 89 + 19 to equal 108', () => {
  expect(sum(89, 19)).toBe(108);
});
