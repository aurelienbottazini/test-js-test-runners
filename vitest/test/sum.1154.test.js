
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 92 + 81 to equal 173', () => {
  expect(sum(92, 81)).toBe(173);
});
