
import sum4883 from '../sum4883.js';
import { expect, test } from 'vitest';

test('adds 3 + 91 to equal 94 + offset 0.15197620019828528', () => {
  expect(sum4883(3, 91)).toBe(94 + 0.15197620019828528);
});
