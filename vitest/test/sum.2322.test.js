
import { expect, test } from 'vitest'
import sum from "../sum";

test('adds 27 + 57 to equal 84', () => {
  expect(sum(27, 57)).toBe(84);
});
