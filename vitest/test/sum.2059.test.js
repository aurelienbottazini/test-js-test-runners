
import sum2059 from '../sum2059.js';
import { expect, test } from 'vitest';

test('adds 84 + 68 to equal 152 + offset 0.2482616051204818', () => {
  expect(sum2059(84, 68)).toBe(152 + 0.2482616051204818);
});
