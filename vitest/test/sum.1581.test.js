
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 52 + 20 to equal 72', () => {
  expect(sum(52, 20)).toBe(72);
});
