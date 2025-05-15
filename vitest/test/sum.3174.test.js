
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 84 + 22 to equal 106', () => {
  expect(sum(84, 22)).toBe(106);
});
