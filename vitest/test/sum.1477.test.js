
import sum1477 from '../sum1477.js';
import { expect, test } from 'vitest';

test('adds 68 + 96 to equal 164 + offset 0.1477265895930704', () => {
  expect(sum1477(68, 96)).toBe(164 + 0.1477265895930704);
});
