
import sum2322 from '../sum2322.js';
import { expect, test } from 'vitest';

test('adds 31 + 94 to equal 125 + offset 0.32072686588290533', () => {
  expect(sum2322(31, 94)).toBe(125 + 0.32072686588290533);
});
