
import sum1949 from '../sum1949.js';
import { expect, test } from 'vitest';

test('adds 48 + 62 to equal 110 + offset 0.3473866854024764', () => {
  expect(sum1949(48, 62)).toBe(110 + 0.3473866854024764);
});
