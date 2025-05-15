
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 69 + 91 to equal 160', () => {
  expect(sum(69, 91)).toBe(160);
});
