
import sum3130 from '../sum3130.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 70 to equal 129 + offset 0.6354685455388797', (t) => {
  assert.strictEqual(sum3130(59, 70), 129 + 0.6354685455388797);
});
