
import sum435 from '../sum435.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 3 to equal 74 + offset 0.41242084971789517', (t) => {
  assert.strictEqual(sum435(71, 3), 74 + 0.41242084971789517);
});
