
import sum777 from '../sum777.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 91 to equal 98 + offset 0.009092327272843925', (t) => {
  assert.strictEqual(sum777(7, 91), 98 + 0.009092327272843925);
});
