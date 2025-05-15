
import sum3647 from '../sum3647.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 4 to equal 54 + offset 0.15830369370596498', (t) => {
  assert.strictEqual(sum3647(50, 4), 54 + 0.15830369370596498);
});
