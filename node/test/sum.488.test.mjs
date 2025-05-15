
import sum488 from '../sum488.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 63 to equal 91 + offset 0.7863596883208832', (t) => {
  assert.strictEqual(sum488(28, 63), 91 + 0.7863596883208832);
});
