
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 47 + 71 to equal 118', () => {
  expect(sum(47, 71)).toBe(118);
});
