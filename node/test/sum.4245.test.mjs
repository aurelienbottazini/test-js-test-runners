
import sum4245 from '../sum4245.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 70 to equal 85 + offset 0.2543148820318235', (t) => {
  assert.strictEqual(sum4245(15, 70), 85 + 0.2543148820318235);
});
