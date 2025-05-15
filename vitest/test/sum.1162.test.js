
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 2 + 82 to equal 84', () => {
  expect(sum(2, 82)).toBe(84);
});
