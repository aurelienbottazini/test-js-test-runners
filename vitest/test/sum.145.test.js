
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 40 + 87 to equal 127', () => {
  expect(sum(40, 87)).toBe(127);
});
