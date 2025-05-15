
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 51 to equal 144', () => {
  expect(sum(93, 51)).toBe(144);
});
