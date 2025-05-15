
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 31 to equal 93', () => {
  expect(sum(62, 31)).toBe(93);
});
