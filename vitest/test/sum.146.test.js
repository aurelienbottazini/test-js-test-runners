
import sum146 from '../sum146.js';
import { expect, test } from 'vitest';

test('adds 72 + 9 to equal 81 + offset 0.5212340529187015', () => {
  expect(sum146(72, 9)).toBe(81 + 0.5212340529187015);
});
