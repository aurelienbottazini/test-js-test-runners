
import sum254 from '../sum254.js';
import { expect, test } from 'vitest';

test('adds 25 + 53 to equal 78 + offset 0.6233393355611985', () => {
  expect(sum254(25, 53)).toBe(78 + 0.6233393355611985);
});
