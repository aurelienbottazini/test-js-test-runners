
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 81 to equal 174', () => {
  expect(sum(93, 81)).toBe(174);
});
