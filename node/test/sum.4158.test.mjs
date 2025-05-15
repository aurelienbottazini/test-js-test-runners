
import sum4158 from '../sum4158.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 60 to equal 64 + offset 0.07871788824081971', (t) => {
  assert.strictEqual(sum4158(4, 60), 64 + 0.07871788824081971);
});
