
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 83 + 69 to equal 152', () => {
  expect(sum(83, 69)).toBe(152);
});
