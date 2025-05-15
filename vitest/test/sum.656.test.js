
import sum656 from '../sum656.js';
import { expect, test } from 'vitest';

test('adds 21 + 66 to equal 87 + offset 0.2926888262077746', () => {
  expect(sum656(21, 66)).toBe(87 + 0.2926888262077746);
});
