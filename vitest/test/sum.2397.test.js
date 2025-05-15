
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 21 to equal 114', () => {
  expect(sum(93, 21)).toBe(114);
});
