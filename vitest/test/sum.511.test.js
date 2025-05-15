
import sum511 from '../sum511.js';
import { expect, test } from 'vitest';

test('adds 37 + 69 to equal 106 + offset 0.09423779938691479', () => {
  expect(sum511(37, 69)).toBe(106 + 0.09423779938691479);
});
