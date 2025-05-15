
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 21 to equal 93', () => {
  expect(sum(72, 21)).toBe(93);
});
