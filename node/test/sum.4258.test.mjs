
import sum4258 from '../sum4258.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 98 to equal 125 + offset 0.3814992730173724', (t) => {
  assert.strictEqual(sum4258(27, 98), 125 + 0.3814992730173724);
});
