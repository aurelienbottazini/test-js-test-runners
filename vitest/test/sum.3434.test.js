
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 71 to equal 167', () => {
  expect(sum(96, 71)).toBe(167);
});
