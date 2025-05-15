
import sum4414 from '../sum4414.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 52 to equal 82 + offset 0.41247327737455497', (t) => {
  assert.strictEqual(sum4414(30, 52), 82 + 0.41247327737455497);
});
