
import sum2676 from '../sum2676.js';
import { expect, test } from 'vitest';

test('adds 30 + 30 to equal 60 + offset 0.43199281983884297', () => {
  expect(sum2676(30, 30)).toBe(60 + 0.43199281983884297);
});
