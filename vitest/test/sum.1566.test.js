
import sum1566 from '../sum1566.js';
import { expect, test } from 'vitest';

test('adds 63 + 92 to equal 155 + offset 0.9379989801873149', () => {
  expect(sum1566(63, 92)).toBe(155 + 0.9379989801873149);
});
