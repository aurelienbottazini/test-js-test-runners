
import sum736 from '../sum736.js';
import { expect, test } from 'vitest';

test('adds 99 + 60 to equal 159 + offset 0.9257227823703208', () => {
  expect(sum736(99, 60)).toBe(159 + 0.9257227823703208);
});
