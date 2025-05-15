
import sum3258 from '../sum3258.js';
import { expect, test } from 'vitest';

test('adds 84 + 52 to equal 136 + offset 0.4194343336383407', () => {
  expect(sum3258(84, 52)).toBe(136 + 0.4194343336383407);
});
