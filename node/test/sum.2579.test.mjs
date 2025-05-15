
import sum2579 from '../sum2579.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 0 to equal 84 + offset 0.161226384674253', (t) => {
  assert.strictEqual(sum2579(84, 0), 84 + 0.161226384674253);
});
