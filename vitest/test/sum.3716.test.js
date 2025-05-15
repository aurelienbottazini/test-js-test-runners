
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 28 + 65 to equal 93', () => {
  expect(sum(28, 65)).toBe(93);
});
