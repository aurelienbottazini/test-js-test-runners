
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 67 + 17 to equal 84', () => {
  expect(sum(67, 17)).toBe(84);
});
