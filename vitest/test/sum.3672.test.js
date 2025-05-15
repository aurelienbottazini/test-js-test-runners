
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 17 + 14 to equal 31', () => {
  expect(sum(17, 14)).toBe(31);
});
