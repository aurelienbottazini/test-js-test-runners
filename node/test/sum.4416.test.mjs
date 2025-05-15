
import sum4416 from '../sum4416.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 83 to equal 131 + offset 0.08245274239237188', (t) => {
  assert.strictEqual(sum4416(48, 83), 131 + 0.08245274239237188);
});
