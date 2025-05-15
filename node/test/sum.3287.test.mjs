
import sum3287 from '../sum3287.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 38 to equal 121 + offset 0.7963696120420513', (t) => {
  assert.strictEqual(sum3287(83, 38), 121 + 0.7963696120420513);
});
