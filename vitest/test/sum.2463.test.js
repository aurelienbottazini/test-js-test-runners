
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 90 to equal 186', () => {
  expect(sum(96, 90)).toBe(186);
});
