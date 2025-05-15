
import sum2150 from '../sum2150.js';
import { expect, test } from 'vitest';

test('adds 33 + 12 to equal 45 + offset 0.44537701874497193', () => {
  expect(sum2150(33, 12)).toBe(45 + 0.44537701874497193);
});
