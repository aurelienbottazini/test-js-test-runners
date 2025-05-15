
import sum566 from '../sum566.js';
import { expect, test } from 'vitest';

test('adds 19 + 32 to equal 51 + offset 0.9971675401098558', () => {
  expect(sum566(19, 32)).toBe(51 + 0.9971675401098558);
});
