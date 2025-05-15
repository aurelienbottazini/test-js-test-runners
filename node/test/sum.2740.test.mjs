
import sum2740 from '../sum2740.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 44 to equal 75 + offset 0.36852435782976545', (t) => {
  assert.strictEqual(sum2740(31, 44), 75 + 0.36852435782976545);
});
