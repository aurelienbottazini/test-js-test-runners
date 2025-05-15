
import sum4615 from '../sum4615.js';
import { expect, test } from 'vitest';

test('adds 37 + 52 to equal 89 + offset 0.5067975939482774', () => {
  expect(sum4615(37, 52)).toBe(89 + 0.5067975939482774);
});
