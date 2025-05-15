
import sum4572 from '../sum4572.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 21 to equal 56 + offset 0.21289448111312415', (t) => {
  assert.strictEqual(sum4572(35, 21), 56 + 0.21289448111312415);
});
