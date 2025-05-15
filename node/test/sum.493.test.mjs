
import sum493 from '../sum493.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 47 to equal 52 + offset 0.7451268174136526', (t) => {
  assert.strictEqual(sum493(5, 47), 52 + 0.7451268174136526);
});
