
import sum1150 from '../sum1150.js';
import { expect, test } from 'vitest';

test('adds 84 + 3 to equal 87 + offset 0.39484831476295346', () => {
  expect(sum1150(84, 3)).toBe(87 + 0.39484831476295346);
});
