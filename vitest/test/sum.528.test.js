
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 71 + 81 to equal 152', () => {
  expect(sum(71, 81)).toBe(152);
});
