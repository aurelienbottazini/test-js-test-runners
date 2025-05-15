
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 63 + 27 to equal 90', () => {
  expect(sum(63, 27)).toBe(90);
});
