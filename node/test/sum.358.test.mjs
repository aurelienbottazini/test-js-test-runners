
import sum358 from '../sum358.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 38 to equal 90 + offset 0.6436239788576902', (t) => {
  assert.strictEqual(sum358(52, 38), 90 + 0.6436239788576902);
});
