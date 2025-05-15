
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 88 + 64 to equal 152', () => {
  expect(sum(88, 64)).toBe(152);
});
