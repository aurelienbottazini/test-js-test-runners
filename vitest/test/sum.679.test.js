
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 9 to equal 62', () => {
  expect(sum(53, 9)).toBe(62);
});
