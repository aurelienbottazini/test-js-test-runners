
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 22 + 14 to equal 36', () => {
  expect(sum(22, 14)).toBe(36);
});
