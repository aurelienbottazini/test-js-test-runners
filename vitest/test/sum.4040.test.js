
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 52 to equal 150', () => {
  expect(sum(98, 52)).toBe(150);
});
