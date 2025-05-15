
import sum1146 from '../sum1146.js';
import { expect, test } from 'vitest';

test('adds 93 + 70 to equal 163 + offset 0.17437094045617985', () => {
  expect(sum1146(93, 70)).toBe(163 + 0.17437094045617985);
});
