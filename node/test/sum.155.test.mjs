
import sum155 from '../sum155.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 11 to equal 73 + offset 0.31879470592233017', (t) => {
  assert.strictEqual(sum155(62, 11), 73 + 0.31879470592233017);
});
