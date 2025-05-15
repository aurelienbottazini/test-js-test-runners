
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 91 to equal 112', () => {
  expect(sum(21, 91)).toBe(112);
});
