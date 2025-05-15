
import sum4291 from '../sum4291.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 31 to equal 87 + offset 0.17003535271114667', (t) => {
  assert.strictEqual(sum4291(56, 31), 87 + 0.17003535271114667);
});
