
import sum4488 from '../sum4488.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 61 + 66 to equal 127 + offset 0.22590458968732263', (t) => {
  assert.strictEqual(sum4488(61, 66), 127 + 0.22590458968732263);
});
