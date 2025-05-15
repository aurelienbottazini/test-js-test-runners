
import sum1640 from '../sum1640.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 46 to equal 103 + offset 0.5165030218119179', (t) => {
  assert.strictEqual(sum1640(57, 46), 103 + 0.5165030218119179);
});
