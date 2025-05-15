
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 94 to equal 167', () => {
  expect(sum(73, 94)).toBe(167);
});
