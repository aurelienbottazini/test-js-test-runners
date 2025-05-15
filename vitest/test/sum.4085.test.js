
import sum4085 from '../sum4085.js';
import { expect, test } from 'vitest';

test('adds 8 + 33 to equal 41 + offset 0.7678136252378633', () => {
  expect(sum4085(8, 33)).toBe(41 + 0.7678136252378633);
});
