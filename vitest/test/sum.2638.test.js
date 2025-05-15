
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 38 to equal 110', () => {
  expect(sum(72, 38)).toBe(110);
});
