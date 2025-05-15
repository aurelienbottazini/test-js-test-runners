
import sum3618 from '../sum3618.js';
import { expect, test } from 'vitest';

test('adds 55 + 87 to equal 142 + offset 0.7149511280471961', () => {
  expect(sum3618(55, 87)).toBe(142 + 0.7149511280471961);
});
