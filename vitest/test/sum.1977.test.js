
import sum1977 from '../sum1977.js';
import { expect, test } from 'vitest';

test('adds 17 + 83 to equal 100 + offset 0.5160979622568843', () => {
  expect(sum1977(17, 83)).toBe(100 + 0.5160979622568843);
});
