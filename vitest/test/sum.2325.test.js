
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 72 + 82 to equal 154', () => {
  expect(sum(72, 82)).toBe(154);
});
