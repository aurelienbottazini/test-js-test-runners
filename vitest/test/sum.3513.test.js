
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 19 + 65 to equal 84', () => {
  expect(sum(19, 65)).toBe(84);
});
