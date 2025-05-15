
import sum934 from '../sum934.js';
import { expect, test } from 'vitest';

test('adds 14 + 83 to equal 97 + offset 0.8810476146982752', () => {
  expect(sum934(14, 83)).toBe(97 + 0.8810476146982752);
});
