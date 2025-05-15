
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 43 to equal 118', () => {
  expect(sum(75, 43)).toBe(118);
});
