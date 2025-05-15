
import sum3195 from '../sum3195.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 77 + 10 to equal 87 + offset 0.5092609339163057', (t) => {
  assert.strictEqual(sum3195(77, 10), 87 + 0.5092609339163057);
});
