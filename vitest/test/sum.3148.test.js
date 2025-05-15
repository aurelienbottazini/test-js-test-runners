
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 83 to equal 163', () => {
  expect(sum(80, 83)).toBe(163);
});
