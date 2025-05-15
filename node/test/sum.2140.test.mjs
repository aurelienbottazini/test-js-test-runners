
import sum2140 from '../sum2140.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 54 to equal 135 + offset 0.8071612810409143', (t) => {
  assert.strictEqual(sum2140(81, 54), 135 + 0.8071612810409143);
});
