
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 93 + 1 to equal 94', () => {
  expect(sum(93, 1)).toBe(94);
});
