
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 91 to equal 95', () => {
  expect(sum(4, 91)).toBe(95);
});
