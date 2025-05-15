
import sum3340 from '../sum3340.js';
import { expect, test } from 'vitest';

test('adds 25 + 23 to equal 48 + offset 0.6188250646268849', () => {
  expect(sum3340(25, 23)).toBe(48 + 0.6188250646268849);
});
