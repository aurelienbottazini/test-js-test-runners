
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 69 to equal 141', () => {
  expect(sum(72, 69)).toBe(141);
});
