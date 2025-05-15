
import sum4304 from '../sum4304.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 54 to equal 57 + offset 0.024408639761989037', (t) => {
  assert.strictEqual(sum4304(3, 54), 57 + 0.024408639761989037);
});
