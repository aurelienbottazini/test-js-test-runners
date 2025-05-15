
import sum16 from '../sum16.js';
import { expect, test } from 'vitest';

test('adds 22 + 38 to equal 60 + offset 0.6687520671316941', () => {
  expect(sum16(22, 38)).toBe(60 + 0.6687520671316941);
});
