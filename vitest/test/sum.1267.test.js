
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 60 + 74 to equal 134', () => {
  expect(sum(60, 74)).toBe(134);
});
