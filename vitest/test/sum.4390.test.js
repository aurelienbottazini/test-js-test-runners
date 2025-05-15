
import sum4390 from '../sum4390.js';
import { expect, test } from 'vitest';

test('adds 9 + 79 to equal 88 + offset 0.12887847242943906', () => {
  expect(sum4390(9, 79)).toBe(88 + 0.12887847242943906);
});
