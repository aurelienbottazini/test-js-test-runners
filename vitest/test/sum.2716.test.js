
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 90 + 44 to equal 134', () => {
  expect(sum(90, 44)).toBe(134);
});
