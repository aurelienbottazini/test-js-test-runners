
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 48 + 58 to equal 106', () => {
  expect(sum(48, 58)).toBe(106);
});
