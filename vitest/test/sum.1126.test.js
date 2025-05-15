
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 29 to equal 127', () => {
  expect(sum(98, 29)).toBe(127);
});
