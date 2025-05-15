
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 6 to equal 33', () => {
  expect(sum(27, 6)).toBe(33);
});
