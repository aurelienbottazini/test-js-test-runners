
import sum2809 from '../sum2809.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 40 to equal 109 + offset 0.571424993784986', (t) => {
  assert.strictEqual(sum2809(69, 40), 109 + 0.571424993784986);
});
