
import sum4133 from '../sum4133.js';
import { expect, test } from 'vitest';

test('adds 64 + 52 to equal 116 + offset 0.35766225837498355', () => {
  expect(sum4133(64, 52)).toBe(116 + 0.35766225837498355);
});
