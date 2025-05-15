
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 59 to equal 134', () => {
  expect(sum(75, 59)).toBe(134);
});
