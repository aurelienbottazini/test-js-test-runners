
import sum409 from '../sum409.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 46 + 26 to equal 72 + offset 0.7403888151556325', (t) => {
  assert.strictEqual(sum409(46, 26), 72 + 0.7403888151556325);
});
