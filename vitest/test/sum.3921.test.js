
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 64 + 20 to equal 84', () => {
  expect(sum(64, 20)).toBe(84);
});
