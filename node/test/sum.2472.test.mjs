
import sum2472 from '../sum2472.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 74 to equal 88 + offset 0.35664126295583265', (t) => {
  assert.strictEqual(sum2472(14, 74), 88 + 0.35664126295583265);
});
