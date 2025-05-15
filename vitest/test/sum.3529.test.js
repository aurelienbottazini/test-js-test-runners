
import sum3529 from '../sum3529.js';
import { expect, test } from 'vitest';

test('adds 25 + 53 to equal 78 + offset 0.3318017268650171', () => {
  expect(sum3529(25, 53)).toBe(78 + 0.3318017268650171);
});
