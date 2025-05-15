
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 18 + 66 to equal 84', () => {
  expect(sum(18, 66)).toBe(84);
});
