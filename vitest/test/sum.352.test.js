
import sum352 from '../sum352.js';
import { expect, test } from 'vitest';

test('adds 62 + 10 to equal 72 + offset 0.4697051952856418', () => {
  expect(sum352(62, 10)).toBe(72 + 0.4697051952856418);
});
