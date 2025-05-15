
import sum1775 from '../sum1775.js';
import { expect, test } from 'vitest';

test('adds 90 + 93 to equal 183 + offset 0.2209173672423782', () => {
  expect(sum1775(90, 93)).toBe(183 + 0.2209173672423782);
});
