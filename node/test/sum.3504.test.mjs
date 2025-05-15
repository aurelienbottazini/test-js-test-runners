
import sum3504 from '../sum3504.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 25 to equal 71 + offset 0.2084082436980319', (t) => {
  assert.strictEqual(sum3504(46, 25), 71 + 0.2084082436980319);
});
