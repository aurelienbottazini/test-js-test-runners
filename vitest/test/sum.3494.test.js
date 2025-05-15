
import sum3494 from '../sum3494.js';
import { expect, test } from 'vitest';

test('adds 55 + 89 to equal 144 + offset 0.12930360881827374', () => {
  expect(sum3494(55, 89)).toBe(144 + 0.12930360881827374);
});
