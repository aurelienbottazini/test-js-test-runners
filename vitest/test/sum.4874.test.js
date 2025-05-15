
import sum4874 from '../sum4874.js';
import { expect, test } from 'vitest';

test('adds 87 + 53 to equal 140 + offset 0.8452465005781495', () => {
  expect(sum4874(87, 53)).toBe(140 + 0.8452465005781495);
});
