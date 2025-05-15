
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 55 + 97 to equal 152', () => {
  expect(sum(55, 97)).toBe(152);
});
