
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 96 + 82 to equal 178', () => {
  expect(sum(96, 82)).toBe(178);
});
