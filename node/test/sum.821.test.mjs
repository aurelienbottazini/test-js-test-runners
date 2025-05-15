
import sum821 from '../sum821.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 15 to equal 15 + offset 0.4445963321291013', (t) => {
  assert.strictEqual(sum821(0, 15), 15 + 0.4445963321291013);
});
