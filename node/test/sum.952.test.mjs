
import sum952 from '../sum952.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 98 to equal 98 + offset 0.34974594682224647', (t) => {
  assert.strictEqual(sum952(0, 98), 98 + 0.34974594682224647);
});
