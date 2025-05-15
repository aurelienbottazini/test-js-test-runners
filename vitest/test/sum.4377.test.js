
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 81 to equal 134', () => {
  expect(sum(53, 81)).toBe(134);
});
