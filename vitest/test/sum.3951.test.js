
import sum3951 from '../sum3951.js';
import { expect, test } from 'vitest';

test('adds 69 + 1 to equal 70 + offset 0.5589008607355099', () => {
  expect(sum3951(69, 1)).toBe(70 + 0.5589008607355099);
});
