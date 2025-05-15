
import sum543 from '../sum543.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 53 to equal 93 + offset 0.5461887587080004', (t) => {
  assert.strictEqual(sum543(40, 53), 93 + 0.5461887587080004);
});
