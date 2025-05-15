
import sum937 from '../sum937.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 77 to equal 174 + offset 0.46195868170050447', (t) => {
  assert.strictEqual(sum937(97, 77), 174 + 0.46195868170050447);
});
