
import sum2870 from '../sum2870.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 20 to equal 28 + offset 0.16722989490752882', (t) => {
  assert.strictEqual(sum2870(8, 20), 28 + 0.16722989490752882);
});
