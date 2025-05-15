
import sum119 from '../sum119.js';
import { expect, test } from 'vitest';

test('adds 85 + 3 to equal 88 + offset 0.6552548965595331', () => {
  expect(sum119(85, 3)).toBe(88 + 0.6552548965595331);
});
