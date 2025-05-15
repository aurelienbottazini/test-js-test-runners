
import sum1661 from '../sum1661.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 31 to equal 96 + offset 0.6838365015417226', (t) => {
  assert.strictEqual(sum1661(65, 31), 96 + 0.6838365015417226);
});
