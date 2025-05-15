
import sum972 from '../sum972.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 1 to equal 1 + offset 0.409780076362237', (t) => {
  assert.strictEqual(sum972(0, 1), 1 + 0.409780076362237);
});
