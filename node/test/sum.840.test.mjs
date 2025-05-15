
import sum840 from '../sum840.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 20 to equal 45 + offset 0.3911908944161747', (t) => {
  assert.strictEqual(sum840(25, 20), 45 + 0.3911908944161747);
});
