
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 44 + 4 to equal 48', () => {
  expect(sum(44, 4)).toBe(48);
});
