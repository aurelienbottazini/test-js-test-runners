
import sum1899 from '../sum1899.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 75 to equal 90 + offset 0.6239879697862826', (t) => {
  assert.strictEqual(sum1899(15, 75), 90 + 0.6239879697862826);
});
