
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 49 to equal 110', () => {
  expect(sum(61, 49)).toBe(110);
});
