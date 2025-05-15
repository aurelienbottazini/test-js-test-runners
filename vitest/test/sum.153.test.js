
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 62 + 22 to equal 84', () => {
  expect(sum(62, 22)).toBe(84);
});
