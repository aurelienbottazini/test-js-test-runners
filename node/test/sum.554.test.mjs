
import sum554 from '../sum554.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 52 to equal 103 + offset 0.7354112535422407', (t) => {
  assert.strictEqual(sum554(51, 52), 103 + 0.7354112535422407);
});
