
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 31 + 59 to equal 90', () => {
  expect(sum(31, 59)).toBe(90);
});
