
import sum3060 from '../sum3060.js';
import { expect, test } from 'vitest';

test('adds 77 + 78 to equal 155 + offset 0.6150565823116968', () => {
  expect(sum3060(77, 78)).toBe(155 + 0.6150565823116968);
});
