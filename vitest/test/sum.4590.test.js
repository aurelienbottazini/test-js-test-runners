
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 10 + 7 to equal 17', () => {
  expect(sum(10, 7)).toBe(17);
});
