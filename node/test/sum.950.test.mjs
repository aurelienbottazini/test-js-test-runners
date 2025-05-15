
import sum950 from '../sum950.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 18 + 52 to equal 70 + offset 0.2543383736079379', (t) => {
  assert.strictEqual(sum950(18, 52), 70 + 0.2543383736079379);
});
