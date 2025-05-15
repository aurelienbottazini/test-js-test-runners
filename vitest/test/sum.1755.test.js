
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 74 + 52 to equal 126', () => {
  expect(sum(74, 52)).toBe(126);
});
