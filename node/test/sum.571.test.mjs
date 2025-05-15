
import sum571 from '../sum571.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 75 to equal 102 + offset 0.9056960805575748', (t) => {
  assert.strictEqual(sum571(27, 75), 102 + 0.9056960805575748);
});
