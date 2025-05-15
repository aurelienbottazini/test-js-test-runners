
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 91 + 27 to equal 118', () => {
  expect(sum(91, 27)).toBe(118);
});
