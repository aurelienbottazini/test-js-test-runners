
import sum644 from '../sum644.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 42 to equal 51 + offset 0.5053552364832984', (t) => {
  assert.strictEqual(sum644(9, 42), 51 + 0.5053552364832984);
});
