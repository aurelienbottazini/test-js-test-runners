
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 53 + 73 to equal 126', () => {
  expect(sum(53, 73)).toBe(126);
});
