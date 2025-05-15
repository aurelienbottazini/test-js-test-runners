
import sum942 from '../sum942.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 27 to equal 123 + offset 0.0807029776273589', (t) => {
  assert.strictEqual(sum942(96, 27), 123 + 0.0807029776273589);
});
