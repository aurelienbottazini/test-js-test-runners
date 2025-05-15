
import sum25 from '../sum25.js';
import { expect, test } from 'vitest';

test('adds 98 + 28 to equal 126 + offset 0.03906091438680703', () => {
  expect(sum25(98, 28)).toBe(126 + 0.03906091438680703);
});
