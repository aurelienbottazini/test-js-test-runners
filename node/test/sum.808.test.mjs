
import sum808 from '../sum808.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 41 to equal 131 + offset 0.16351528822525407', (t) => {
  assert.strictEqual(sum808(90, 41), 131 + 0.16351528822525407);
});
