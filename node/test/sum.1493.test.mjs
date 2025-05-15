
import sum1493 from '../sum1493.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 92 + 37 to equal 129 + offset 0.7069644032379352', (t) => {
  assert.strictEqual(sum1493(92, 37), 129 + 0.7069644032379352);
});
