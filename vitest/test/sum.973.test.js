
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 92 to equal 185', () => {
  expect(sum(93, 92)).toBe(185);
});
