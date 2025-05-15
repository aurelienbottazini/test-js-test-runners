
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 75 to equal 163', () => {
  expect(sum(88, 75)).toBe(163);
});
