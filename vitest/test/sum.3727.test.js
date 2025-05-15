
import sum3727 from '../sum3727.js';
import { expect, test } from 'vitest';

test('adds 93 + 2 to equal 95 + offset 0.6786250302667656', () => {
  expect(sum3727(93, 2)).toBe(95 + 0.6786250302667656);
});
