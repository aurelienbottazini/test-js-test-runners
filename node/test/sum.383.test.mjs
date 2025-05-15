
import sum383 from '../sum383.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 81 to equal 137 + offset 0.10928933096821447', (t) => {
  assert.strictEqual(sum383(56, 81), 137 + 0.10928933096821447);
});
