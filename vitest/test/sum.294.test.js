
import sum294 from '../sum294.js';
import { expect, test } from 'vitest';

test('adds 85 + 60 to equal 145 + offset 0.3752552434222156', () => {
  expect(sum294(85, 60)).toBe(145 + 0.3752552434222156);
});
