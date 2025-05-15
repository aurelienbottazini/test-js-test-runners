
import sum1629 from '../sum1629.js';
import { expect, test } from 'vitest';

test('adds 82 + 26 to equal 108 + offset 0.9399676800385144', () => {
  expect(sum1629(82, 26)).toBe(108 + 0.9399676800385144);
});
