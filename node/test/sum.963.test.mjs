
import sum963 from '../sum963.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 55 to equal 107 + offset 0.9654606564340188', (t) => {
  assert.strictEqual(sum963(52, 55), 107 + 0.9654606564340188);
});
