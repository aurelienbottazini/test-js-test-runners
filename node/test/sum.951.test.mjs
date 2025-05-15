
import sum951 from '../sum951.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 87 to equal 89 + offset 0.12232491654752409', (t) => {
  assert.strictEqual(sum951(2, 87), 89 + 0.12232491654752409);
});
