
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 44 to equal 128', () => {
  expect(sum(84, 44)).toBe(128);
});
