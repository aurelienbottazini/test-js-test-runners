
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 6 to equal 78', () => {
  expect(sum(72, 6)).toBe(78);
});
