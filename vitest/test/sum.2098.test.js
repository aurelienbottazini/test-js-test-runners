
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 20 + 7 to equal 27', () => {
  expect(sum(20, 7)).toBe(27);
});
