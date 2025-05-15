
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 61 + 91 to equal 152', () => {
  expect(sum(61, 91)).toBe(152);
});
