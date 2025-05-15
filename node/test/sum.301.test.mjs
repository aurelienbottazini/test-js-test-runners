
import sum301 from '../sum301.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 41 to equal 130 + offset 0.4947242675502116', (t) => {
  assert.strictEqual(sum301(89, 41), 130 + 0.4947242675502116);
});
