
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 66 to equal 134', () => {
  expect(sum(68, 66)).toBe(134);
});
