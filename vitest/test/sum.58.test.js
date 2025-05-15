
import sum58 from '../sum58.js';
import { expect, test } from 'vitest';

test('adds 3 + 27 to equal 30 + offset 0.6660529247855925', () => {
  expect(sum58(3, 27)).toBe(30 + 0.6660529247855925);
});
