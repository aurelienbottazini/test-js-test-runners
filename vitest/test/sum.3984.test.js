
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 73 + 13 to equal 86', () => {
  expect(sum(73, 13)).toBe(86);
});
