
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 7 + 21 to equal 28', () => {
  expect(sum(7, 21)).toBe(28);
});
