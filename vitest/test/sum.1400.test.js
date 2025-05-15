
import sum1400 from '../sum1400.js';
import { expect, test } from 'vitest';

test('adds 90 + 46 to equal 136 + offset 0.889356428445229', () => {
  expect(sum1400(90, 46)).toBe(136 + 0.889356428445229);
});
