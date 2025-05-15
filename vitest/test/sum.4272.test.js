
import sum4272 from '../sum4272.js';
import { expect, test } from 'vitest';

test('adds 53 + 62 to equal 115 + offset 0.16943597895091078', () => {
  expect(sum4272(53, 62)).toBe(115 + 0.16943597895091078);
});
