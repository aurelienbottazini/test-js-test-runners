
import sum1601 from '../sum1601.js';
import { expect, test } from 'vitest';

test('adds 45 + 59 to equal 104 + offset 0.10565876524596507', () => {
  expect(sum1601(45, 59)).toBe(104 + 0.10565876524596507);
});
