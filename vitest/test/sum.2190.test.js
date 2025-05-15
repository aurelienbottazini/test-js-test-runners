
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 98 + 66 to equal 164', () => {
  expect(sum(98, 66)).toBe(164);
});
