
import sum308 from '../sum308.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 58 to equal 102 + offset 0.7794096636256909', (t) => {
  assert.strictEqual(sum308(44, 58), 102 + 0.7794096636256909);
});
