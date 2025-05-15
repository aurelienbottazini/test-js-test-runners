
import sum1928 from '../sum1928.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 38 to equal 44 + offset 0.5236340708902949', (t) => {
  assert.strictEqual(sum1928(6, 38), 44 + 0.5236340708902949);
});
