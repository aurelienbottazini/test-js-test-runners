
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 26 + 89 to equal 115', () => {
  expect(sum(26, 89)).toBe(115);
});
