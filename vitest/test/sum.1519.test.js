
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 21 + 63 to equal 84', () => {
  expect(sum(21, 63)).toBe(84);
});
