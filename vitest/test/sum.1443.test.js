
import sum1443 from '../sum1443.js';
import { expect, test } from 'vitest';

test('adds 47 + 52 to equal 99 + offset 0.7360356154903078', () => {
  expect(sum1443(47, 52)).toBe(99 + 0.7360356154903078);
});
