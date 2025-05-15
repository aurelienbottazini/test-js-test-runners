
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 68 + 84 to equal 152', () => {
  expect(sum(68, 84)).toBe(152);
});
