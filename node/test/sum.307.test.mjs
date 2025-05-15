
import sum307 from '../sum307.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 79 to equal 138 + offset 0.7305058165110608', (t) => {
  assert.strictEqual(sum307(59, 79), 138 + 0.7305058165110608);
});
