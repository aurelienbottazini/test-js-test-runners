
import sum50 from '../sum50.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 97 to equal 147 + offset 0.7787786417410384', (t) => {
  assert.strictEqual(sum50(50, 97), 147 + 0.7787786417410384);
});
