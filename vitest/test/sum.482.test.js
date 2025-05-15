
import sum482 from '../sum482.js';
import { expect, test } from 'vitest';

test('adds 89 + 16 to equal 105 + offset 0.6149053639748487', () => {
  expect(sum482(89, 16)).toBe(105 + 0.6149053639748487);
});
