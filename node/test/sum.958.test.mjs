
import sum958 from '../sum958.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 10 to equal 105 + offset 0.26195701086054046', (t) => {
  assert.strictEqual(sum958(95, 10), 105 + 0.26195701086054046);
});
