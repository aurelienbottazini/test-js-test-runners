
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 57 + 5 to equal 62', () => {
  expect(sum(57, 5)).toBe(62);
});
