
import sum418 from '../sum418.js';
import { expect, test } from 'vitest';

test('adds 45 + 6 to equal 51 + offset 0.6159436196947305', () => {
  expect(sum418(45, 6)).toBe(51 + 0.6159436196947305);
});
