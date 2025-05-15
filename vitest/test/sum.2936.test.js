
import sum2936 from '../sum2936.js';
import { expect, test } from 'vitest';

test('adds 33 + 29 to equal 62 + offset 0.5349347077022112', () => {
  expect(sum2936(33, 29)).toBe(62 + 0.5349347077022112);
});
