
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 14 + 26 to equal 40', () => {
  expect(sum(14, 26)).toBe(40);
});
