
import sum2060 from '../sum2060.js';
import { expect, test } from 'vitest';

test('adds 73 + 12 to equal 85 + offset 0.035410246727951455', () => {
  expect(sum2060(73, 12)).toBe(85 + 0.035410246727951455);
});
