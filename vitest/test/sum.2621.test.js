
import sum2621 from '../sum2621.js';
import { expect, test } from 'vitest';

test('adds 83 + 97 to equal 180 + offset 0.23651994110954977', () => {
  expect(sum2621(83, 97)).toBe(180 + 0.23651994110954977);
});
