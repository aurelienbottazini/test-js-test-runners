
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 41 + 65 to equal 106', () => {
  expect(sum(41, 65)).toBe(106);
});
