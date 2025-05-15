
import sum750 from '../sum750.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 68 to equal 71 + offset 0.7969894906394521', (t) => {
  assert.strictEqual(sum750(3, 68), 71 + 0.7969894906394521);
});
