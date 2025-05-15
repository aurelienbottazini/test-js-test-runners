
import sum3671 from '../sum3671.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 68 to equal 138 + offset 0.5532369086414826', (t) => {
  assert.strictEqual(sum3671(70, 68), 138 + 0.5532369086414826);
});
