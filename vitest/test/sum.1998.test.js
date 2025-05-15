
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 80 + 89 to equal 169', () => {
  expect(sum(80, 89)).toBe(169);
});
