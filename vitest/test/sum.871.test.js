
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 82 + 44 to equal 126', () => {
  expect(sum(82, 44)).toBe(126);
});
