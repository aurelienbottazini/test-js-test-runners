
import sum4240 from '../sum4240.js';
import { expect, test } from 'vitest';

test('adds 67 + 88 to equal 155 + offset 0.47999003057186496', () => {
  expect(sum4240(67, 88)).toBe(155 + 0.47999003057186496);
});
