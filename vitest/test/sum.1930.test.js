
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 54 + 73 to equal 127', () => {
  expect(sum(54, 73)).toBe(127);
});
