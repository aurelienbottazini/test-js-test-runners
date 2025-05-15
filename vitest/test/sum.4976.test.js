
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 28 to equal 126', () => {
  expect(sum(98, 28)).toBe(126);
});
