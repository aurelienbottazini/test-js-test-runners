
import sum4721 from '../sum4721.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 26 to equal 47 + offset 0.371034405806684', (t) => {
  assert.strictEqual(sum4721(21, 26), 47 + 0.371034405806684);
});
