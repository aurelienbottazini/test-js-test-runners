
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 88 to equal 186', () => {
  expect(sum(98, 88)).toBe(186);
});
