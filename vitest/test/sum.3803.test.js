
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 97 + 18 to equal 115', () => {
  expect(sum(97, 18)).toBe(115);
});
