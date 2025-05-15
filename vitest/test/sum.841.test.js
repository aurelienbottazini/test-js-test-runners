
import sum841 from '../sum841.js';
import { expect, test } from 'vitest';

test('adds 31 + 95 to equal 126 + offset 0.6660050227336777', () => {
  expect(sum841(31, 95)).toBe(126 + 0.6660050227336777);
});
