
import sum4553 from '../sum4553.js';
import { expect, test } from 'vitest';

test('adds 59 + 3 to equal 62 + offset 0.9773669745230591', () => {
  expect(sum4553(59, 3)).toBe(62 + 0.9773669745230591);
});
