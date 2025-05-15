
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 9 + 26 to equal 35', () => {
  expect(sum(9, 26)).toBe(35);
});
