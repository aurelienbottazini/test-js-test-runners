
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 70 to equal 152', () => {
  expect(sum(82, 70)).toBe(152);
});
