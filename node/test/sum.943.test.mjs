
import sum943 from '../sum943.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 67 to equal 126 + offset 0.414793892265366', (t) => {
  assert.strictEqual(sum943(59, 67), 126 + 0.414793892265366);
});
