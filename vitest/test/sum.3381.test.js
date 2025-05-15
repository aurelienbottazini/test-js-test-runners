
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 11 + 73 to equal 84', () => {
  expect(sum(11, 73)).toBe(84);
});
