
import sum1528 from '../sum1528.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 16 to equal 84 + offset 0.35299740563502446', (t) => {
  assert.strictEqual(sum1528(68, 16), 84 + 0.35299740563502446);
});
