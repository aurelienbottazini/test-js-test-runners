
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 20 to equal 118', () => {
  expect(sum(98, 20)).toBe(118);
});
