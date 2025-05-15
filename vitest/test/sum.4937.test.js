
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 20 to equal 31', () => {
  expect(sum(11, 20)).toBe(31);
});
