
import sum4211 from '../sum4211.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 17 to equal 65 + offset 0.5050077245748406', (t) => {
  assert.strictEqual(sum4211(48, 17), 65 + 0.5050077245748406);
});
