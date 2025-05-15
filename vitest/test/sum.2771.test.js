
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 35 + 81 to equal 116', () => {
  expect(sum(35, 81)).toBe(116);
});
