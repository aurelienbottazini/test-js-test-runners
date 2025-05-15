
import sum3696 from '../sum3696.js';
import { expect, test } from 'vitest';

test('adds 74 + 90 to equal 164 + offset 0.78196234321268', () => {
  expect(sum3696(74, 90)).toBe(164 + 0.78196234321268);
});
