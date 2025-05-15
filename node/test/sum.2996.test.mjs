
import sum2996 from '../sum2996.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 54 to equal 134 + offset 0.9460335625628119', (t) => {
  assert.strictEqual(sum2996(80, 54), 134 + 0.9460335625628119);
});
