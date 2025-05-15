
import sum470 from '../sum470.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 75 to equal 108 + offset 0.939582157406223', (t) => {
  assert.strictEqual(sum470(33, 75), 108 + 0.939582157406223);
});
