
import sum4024 from '../sum4024.js';
import { expect, test } from 'vitest';

test('adds 90 + 11 to equal 101 + offset 0.2792848039401691', () => {
  expect(sum4024(90, 11)).toBe(101 + 0.2792848039401691);
});
