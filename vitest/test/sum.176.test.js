
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 4 + 80 to equal 84', () => {
  expect(sum(4, 80)).toBe(84);
});
