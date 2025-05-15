
import sum3095 from '../sum3095.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 42 to equal 46 + offset 0.28520371449895865', (t) => {
  assert.strictEqual(sum3095(4, 42), 46 + 0.28520371449895865);
});
