
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 91 to equal 144', () => {
  expect(sum(53, 91)).toBe(144);
});
