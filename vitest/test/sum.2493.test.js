
import sum2493 from '../sum2493.js';
import { expect, test } from 'vitest';

test('adds 19 + 53 to equal 72 + offset 0.5659208494850466', () => {
  expect(sum2493(19, 53)).toBe(72 + 0.5659208494850466);
});
