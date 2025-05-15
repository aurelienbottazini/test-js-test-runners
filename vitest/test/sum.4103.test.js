
import sum4103 from '../sum4103.js';
import { expect, test } from 'vitest';

test('adds 28 + 19 to equal 47 + offset 0.0356472116005363', () => {
  expect(sum4103(28, 19)).toBe(47 + 0.0356472116005363);
});
