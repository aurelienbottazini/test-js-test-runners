
import sum152 from '../sum152.js';
import { expect, test } from 'vitest';

test('adds 99 + 11 to equal 110 + offset 0.8006483536967394', () => {
  expect(sum152(99, 11)).toBe(110 + 0.8006483536967394);
});
