
import sum3353 from '../sum3353.js';
import { expect, test } from 'vitest';

test('adds 66 + 82 to equal 148 + offset 0.13846878376772653', () => {
  expect(sum3353(66, 82)).toBe(148 + 0.13846878376772653);
});
