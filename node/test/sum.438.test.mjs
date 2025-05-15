
import sum438 from '../sum438.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 45 to equal 89 + offset 0.19683208603923452', (t) => {
  assert.strictEqual(sum438(44, 45), 89 + 0.19683208603923452);
});
