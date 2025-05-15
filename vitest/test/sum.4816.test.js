
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 52 to equal 59', () => {
  expect(sum(7, 52)).toBe(59);
});
