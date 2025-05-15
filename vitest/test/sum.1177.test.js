
import sum1177 from '../sum1177.js';
import { expect, test } from 'vitest';

test('adds 46 + 81 to equal 127 + offset 0.5355658757025893', () => {
  expect(sum1177(46, 81)).toBe(127 + 0.5355658757025893);
});
