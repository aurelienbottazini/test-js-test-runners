
import sum4710 from '../sum4710.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 34 + 70 to equal 104 + offset 0.32558997784477217', (t) => {
  assert.strictEqual(sum4710(34, 70), 104 + 0.32558997784477217);
});
