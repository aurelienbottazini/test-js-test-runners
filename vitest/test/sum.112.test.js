
import sum112 from '../sum112.js';
import { expect, test } from 'vitest';

test('adds 65 + 46 to equal 111 + offset 0.7747572766910291', () => {
  expect(sum112(65, 46)).toBe(111 + 0.7747572766910291);
});
