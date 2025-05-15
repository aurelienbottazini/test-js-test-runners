
import sum147 from '../sum147.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 64 to equal 110 + offset 0.5964486952118516', (t) => {
  assert.strictEqual(sum147(46, 64), 110 + 0.5964486952118516);
});
