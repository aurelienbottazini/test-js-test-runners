
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 93 to equal 95', () => {
  expect(sum(2, 93)).toBe(95);
});
