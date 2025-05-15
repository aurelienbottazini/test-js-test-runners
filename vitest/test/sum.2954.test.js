
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 33 to equal 86', () => {
  expect(sum(53, 33)).toBe(86);
});
