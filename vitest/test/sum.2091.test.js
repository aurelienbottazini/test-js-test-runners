
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 7 to equal 90', () => {
  expect(sum(83, 7)).toBe(90);
});
