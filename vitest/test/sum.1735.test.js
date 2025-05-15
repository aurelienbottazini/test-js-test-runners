
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 9 to equal 31', () => {
  expect(sum(22, 9)).toBe(31);
});
