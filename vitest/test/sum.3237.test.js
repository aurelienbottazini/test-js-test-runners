
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 75 + 89 to equal 164', () => {
  expect(sum(75, 89)).toBe(164);
});
