
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 38 to equal 131', () => {
  expect(sum(93, 38)).toBe(131);
});
