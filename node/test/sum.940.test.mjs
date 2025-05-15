
import sum940 from '../sum940.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 22 + 16 to equal 38 + offset 0.1428197871131408', (t) => {
  assert.strictEqual(sum940(22, 16), 38 + 0.1428197871131408);
});
