
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 65 + 99 to equal 164', () => {
  expect(sum(65, 99)).toBe(164);
});
