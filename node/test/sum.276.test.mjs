
import sum276 from '../sum276.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 4 to equal 60 + offset 0.02909619862088686', (t) => {
  assert.strictEqual(sum276(56, 4), 60 + 0.02909619862088686);
});
