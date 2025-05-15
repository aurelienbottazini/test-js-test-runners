
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 70 to equal 163', () => {
  expect(sum(93, 70)).toBe(163);
});
