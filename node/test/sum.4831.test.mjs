
import sum4831 from '../sum4831.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 91 to equal 183 + offset 0.009123923378294596', (t) => {
  assert.strictEqual(sum4831(92, 91), 183 + 0.009123923378294596);
});
